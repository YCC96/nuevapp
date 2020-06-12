import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.directive("uppercase", {
  twoWay: true,
  // TODO: unbind
  unbind: () => {},
  bind: function (el, binding, vnode) {
    const findVModelName = vnode => {
      try {
        // https://forum.vuejs.org/t/solved-how-can-you-update-the-v-model-from-a-custom-directive-in-vue-2/2275
        return vnode.data.directives.find(o => {
          return o.name === "model";
        }).expression;
      } catch (error) {
        error.message = `Unable to find v-model directive at ${
        vnode.tag
      } tag. Please specify the expression: v-uppercase='obj.prop'`;
        throw error;
      }
    };

    const funcByName = (functionName, context, value) => {
      // https://stackoverflow.com/a/359910/8801075
      var namespaces = functionName.split(".");
      var func = namespaces.pop();
      for (var i = 0; i < namespaces.length; i++)
        context = context[namespaces[i]];
      return (context[func] = value);
    };

    var expression = binding.expression ?
      binding.expression :
      findVModelName(vnode);
    vnode.context.$watch(expression, {
      //deep: true, // ?
      immediate: true,
      handler(newVal) {
        if (newVal) {
          return funcByName(
            expression,
            vnode.context,
            newVal.toString().toLocaleUpperCase()
          );
        }
      }
    });
  }
});

Vue.directive("lowercase", {
  twoWay: true,
  // TODO: unbind
  unbind: () => {},
  bind: function (el, binding, vnode) {
    const findVModelName = vnode => {
      try {
        // https://forum.vuejs.org/t/solved-how-can-you-update-the-v-model-from-a-custom-directive-in-vue-2/2275
        return vnode.data.directives.find(o => {
          return o.name === "model";
        }).expression;
      } catch (error) {
        error.message = `Unable to find v-model directive at ${
        vnode.tag
      } tag. Please specify the expression: v-uppercase='obj.prop'`;
        throw error;
      }
    };

    const funcByName = (functionName, context, value) => {
      // https://stackoverflow.com/a/359910/8801075
      var namespaces = functionName.split(".");
      var func = namespaces.pop();
      for (var i = 0; i < namespaces.length; i++)
        context = context[namespaces[i]];
      return (context[func] = value);
    };

    var expression = binding.expression ?
      binding.expression :
      findVModelName(vnode);
    vnode.context.$watch(expression, {
      //deep: true, // ?
      immediate: true,
      handler(newVal) {
        if (newVal) {
          return funcByName(
            expression,
            vnode.context,
            newVal.toString().toLocaleLowerCase()
          );
        }
      }
    });
  }
});

Vue.directive('onlyText', {
  update: function(el) {
    el.value = el.value.replace(/[^A-Za-zÑñ\s\u007FáéíóúüñÁÉÍÓÚÜÑ]+/, '');
  }
});

Vue.directive('alphanumeric', {
    update: function(el) {
      el.value = el.value.replace(/[^a-zA-Z0-9]/g, '');
    }
});

Vue.directive('alphanumericAddress', {
    update: function(el) {
      el.value = el.value.replace(/[^a-zA-Z0-9 .,]/g, '');
    }
});

Vue.directive('onlyNumbers', {
    bind(el) {
      let handlerInput = (e) => {
        const hasNumberRgx = /^[0-9]*$/;
        const numberRgx = /[^0-9]/g;
        if (hasNumberRgx.test(e.target.value) === false) {
          const start = e.target.selectionStart;
          const end = e.target.selectionEnd;
          e.target.value = e.target.value.replace(numberRgx, '');
          e.target.setSelectionRange(start, end);
          e.target.dispatchEvent(new CustomEvent('input'))
        }
      };
      el.addEventListener('input', handlerInput);
    }
});

Vue.directive('email', {
  update: function(el) {
    el.value = el.value.replace(/[^a-zA-Z0-9.-_@]/g, '');
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
