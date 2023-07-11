import { defineComponent } from 'vue';

var script$1 = defineComponent({
    name: "InputText"
});

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return null
}

script$1.render = render$1;
script$1.__file = "src/InputText.vue";

var script = defineComponent({
    name: "InputTextarea"
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return null
}

script.render = render;
script.__file = "src/InputTextarea.vue";

var components = { InputTextarea: script, InputText: script$1 };

const plugin = {
    install (Vue) {
        for (const prop in components) {
            if (components.hasOwnProperty(prop)) {
                const component = components[prop];
                Vue.component(prop, component);
            }
        }
    }
};

export { plugin as default };
