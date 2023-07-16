'use strict';

var vue = require('vue');

var script$7 = vue.defineComponent({
    name: 'InputText',
    data() {
        return {
            inputValue: ''
        };
    },
});

const _hoisted_1$5 = { class: "input-container" };

function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$5, [
    vue.withDirectives(vue.createElementVNode("input", {
      type: "text",
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.inputValue) = $event)),
      class: "input-text",
      placeholder: "Enter text...",
      onInput: _cache[1] || (_cache[1] = $event => (_ctx.$emit('inputValue', _ctx.inputValue)))
    }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */), [
      [vue.vModelText, _ctx.inputValue]
    ])
  ]))
}

script$7.render = render$7;
script$7.__file = "src/InputText.vue";

var script$6 = vue.defineComponent({
    name: 'InputTextarea',
    data() {
        return {
            inputValue: ''
        };
    }
});

function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
    type: "textarea",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.inputValue) = $event)),
    onInput: _cache[1] || (_cache[1] = $event => (_ctx.$emit('inputValue', _ctx.inputValue)))
  }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */)), [
    [vue.vModelText, _ctx.inputValue]
  ])
}

script$6.render = render$6;
script$6.__file = "src/InputTextarea.vue";

var script$5 = vue.defineComponent({
    name: "PreviewCard",
    props: {
        image: {
            type: String,
            default: ""
        },
        title: {
            type: String,
            default: "Preview"
        },
        summary: {
            type: String,
            default: "Preview"
        },
        url: {
            type: String,
            required: false
        }
    }
});

const _hoisted_1$4 = ["href"];
const _hoisted_2$3 = ["src", "alt"];
const _hoisted_3$2 = { id: "title" };
const _hoisted_4$2 = { id: "summary" };

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("a", {
    id: "container",
    href: _ctx.url
  }, [
    vue.renderSlot(_ctx.$slots, "image", { image: _ctx.image }, () => [
      vue.createElementVNode("img", {
        src: _ctx.image,
        alt: _ctx.title,
        id: "image"
      }, null, 8 /* PROPS */, _hoisted_2$3)
    ]),
    vue.renderSlot(_ctx.$slots, "title", { title: _ctx.title }, () => [
      vue.createElementVNode("div", _hoisted_3$2, vue.toDisplayString(_ctx.title), 1 /* TEXT */)
    ]),
    vue.renderSlot(_ctx.$slots, "summary", { summary: _ctx.summary }, () => [
      vue.createElementVNode("div", _hoisted_4$2, vue.toDisplayString(_ctx.summary), 1 /* TEXT */)
    ])
  ], 8 /* PROPS */, _hoisted_1$4))
}

script$5.render = render$5;
script$5.__scopeId = "data-v-1447a38f";
script$5.__file = "src/PreviewCard.vue";

var script$4 = {
    props: {
        currentPage: {
            type: Number,
            required: true
        },
        totalPages: {
            type: Number,
            required: true
        }
    },
    methods: {
        goToPage(page) {
            if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
                this.$emit('page-change', page);
            }
        }
    }
};

const _hoisted_1$3 = { class: "pagination" };
const _hoisted_2$2 = ["disabled"];
const _hoisted_3$1 = { class: "pagination-pages" };
const _hoisted_4$1 = ["onClick"];
const _hoisted_5 = ["disabled"];

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$3, [
    vue.createElementVNode("button", {
      class: "pagination-button",
      disabled: $props.currentPage === 1,
      onClick: _cache[0] || (_cache[0] = $event => ($options.goToPage($props.currentPage - 1)))
    }, [
      vue.renderSlot(_ctx.$slots, "prev", {}, () => [
        vue.createTextVNode(" Prev ")
      ])
    ], 8 /* PROPS */, _hoisted_2$2),
    vue.createElementVNode("div", _hoisted_3$1, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.totalPages, (page) => {
        return (vue.openBlock(), vue.createElementBlock("button", {
          key: page,
          class: vue.normalizeClass(['pagination-page', { active: page === $props.currentPage }]),
          onClick: $event => ($options.goToPage(page))
        }, [
          vue.renderSlot(_ctx.$slots, `${page}-page`, { page: page }, () => [
            vue.createTextVNode(vue.toDisplayString(page), 1 /* TEXT */)
          ])
        ], 10 /* CLASS, PROPS */, _hoisted_4$1))
      }), 128 /* KEYED_FRAGMENT */))
    ]),
    vue.createElementVNode("button", {
      class: "pagination-button",
      disabled: $props.currentPage === $props.totalPages,
      onClick: _cache[1] || (_cache[1] = $event => ($options.goToPage($props.currentPage + 1)))
    }, [
      vue.renderSlot(_ctx.$slots, "next", {}, () => [
        vue.createTextVNode(" Next ")
      ])
    ], 8 /* PROPS */, _hoisted_5)
  ]))
}

script$4.render = render$4;
script$4.__file = "src/Pagination.vue";

var script$3 = {
    props: {
        columns: {
            type: Array,
            required: true
        },
        items: {
            type: Array,
            required: true
        }
    }
};

const _hoisted_1$2 = { class: "table" };

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("table", _hoisted_1$2, [
    vue.createElementVNode("thead", null, [
      vue.createElementVNode("tr", null, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.columns, (column) => {
          return (vue.openBlock(), vue.createElementBlock("th", {
            key: column.key
          }, [
            vue.renderSlot(_ctx.$slots, column.label, {}, () => [
              vue.renderSlot(_ctx.$slots, "label", {}, () => [
                vue.createTextVNode(vue.toDisplayString(column.label), 1 /* TEXT */)
              ])
            ])
          ]))
        }), 128 /* KEYED_FRAGMENT */))
      ])
    ]),
    vue.createElementVNode("tbody", null, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.items, (item) => {
        return (vue.openBlock(), vue.createElementBlock("tr", {
          key: item.id
        }, [
          (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.columns, (column) => {
            return (vue.openBlock(), vue.createElementBlock("td", {
              key: column.key
            }, [
              vue.renderSlot(_ctx.$slots, column.key, {}, () => [
                vue.renderSlot(_ctx.$slots, "column", {}, () => [
                  vue.createTextVNode(vue.toDisplayString(item[column.key]), 1 /* TEXT */)
                ])
              ])
            ]))
          }), 128 /* KEYED_FRAGMENT */))
        ]))
      }), 128 /* KEYED_FRAGMENT */))
    ])
  ]))
}

script$3.render = render$3;
script$3.__file = "src/Table.vue";

var script$2 = {
    props: {
        variant: {
            type: String,
            default: 'default',
            validator: (value) => ['default', 'primary', 'secondary'].includes(value)
        },
        size: {
            type: String,
            default: 'medium',
            validator: (value) => ['small', 'medium', 'large'].includes(value)
        }
    },
    computed: {
        buttonClasses() {
            return [
                'button',
                `button-${this.variant}`,
                `button-${this.size}`
            ];
        }
    }
};

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("button", {
    class: vue.normalizeClass($options.buttonClasses),
    onClick: _cache[0] || (_cache[0] = $event => (_ctx.$emit('click')))
  }, [
    vue.renderSlot(_ctx.$slots, "default")
  ], 2 /* CLASS */))
}

script$2.render = render$2;
script$2.__file = "src/Button.vue";

var script$1 = {
    data() {
        return {
            isOpen: false
        };
    },
    props: {
        header: {
            type: String,
            required: true
        },
        content: {
            type: String,
            default: ''
        }
    },
    methods: {
        toggleAccordion() {
            this.isOpen = !this.isOpen;
        }
    }
};

const _hoisted_1$1 = { class: "accordion" };
const _hoisted_2$1 = {
  key: 0,
  class: "accordion-content"
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [
    vue.renderSlot(_ctx.$slots, "header", { onClick: $options.toggleAccordion }, () => [
      vue.createElementVNode("button", {
        class: "accordion-header",
        onClick: _cache[0] || (_cache[0] = (...args) => ($options.toggleAccordion && $options.toggleAccordion(...args)))
      }, vue.toDisplayString($props.header), 1 /* TEXT */)
    ]),
    vue.createVNode(vue.Transition, { name: "accordion-transition" }, {
      default: vue.withCtx(() => [
        ($data.isOpen)
          ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2$1, [
              vue.renderSlot(_ctx.$slots, "content", {}, () => [
                vue.createTextVNode(vue.toDisplayString($props.content), 1 /* TEXT */)
              ])
            ]))
          : vue.createCommentVNode("v-if", true)
      ]),
      _: 3 /* FORWARDED */
    })
  ]))
}

script$1.render = render$1;
script$1.__file = "src/Accordion.vue";

var script = {
    props: {
        id: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        options: {
            type: Array,
            required: true
        },
        value: {
            type: [String, Number],
            default: ''
        }
    },
    data() {
        return {
            selectedOption: this.value
        };
    },
    watch: {
        value(newValue) {
            this.selectedOption = newValue;
        }
    },
    mounted() {
        this.selectedOption = this.value;
    },
    computed: {
        selectedOptionLabel() {
            const selected = this.options.find(option => option.value === this.selectedOption);
            return selected ? selected.label : '';
        }
    },
    methods: {
        emitInput() {
            this.$emit('input', this.selectedOption);
        }
    }
};

const _hoisted_1 = { class: "form-dropdown" };
const _hoisted_2 = ["for"];
const _hoisted_3 = ["id"];
const _hoisted_4 = ["value"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    vue.createElementVNode("label", {
      for: $props.id,
      class: "form-dropdown-label"
    }, vue.toDisplayString($props.label), 9 /* TEXT, PROPS */, _hoisted_2),
    vue.withDirectives(vue.createElementVNode("select", {
      id: $props.id,
      class: "form-dropdown-select",
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($data.selectedOption) = $event))
    }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.options, (option) => {
        return (vue.openBlock(), vue.createElementBlock("option", {
          value: option.value,
          key: option.value
        }, [
          vue.renderSlot(_ctx.$slots, "options", {
            value: option.label
          }, () => [
            vue.createTextVNode(vue.toDisplayString(option.label), 1 /* TEXT */)
          ])
        ], 8 /* PROPS */, _hoisted_4))
      }), 128 /* KEYED_FRAGMENT */))
    ], 8 /* PROPS */, _hoisted_3), [
      [vue.vModelSelect, $data.selectedOption]
    ])
  ]))
}

script.render = render;
script.__file = "src/Dropdown.vue";

var components = { InputTextarea: script$6, InputText: script$7, PreviewCard: script$5, Pagination: script$4, Table: script$3, Button: script$2, Accordion: script$1, Dropdown: script };

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

module.exports = plugin;
