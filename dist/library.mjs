import { defineComponent, openBlock, createElementBlock, withDirectives, createElementVNode, vModelText, renderSlot, toDisplayString, createTextVNode, Fragment, renderList, normalizeClass, createVNode, Transition, withCtx, createCommentVNode, vModelSelect, resolveComponent, normalizeStyle, vModelCheckbox } from 'vue';

var script$e = defineComponent({
    name: 'InputText',
    data() {
        return {
            inputValue: ''
        };
    },
});

const _hoisted_1$c = { class: "input-container" };

function render$e(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1$c, [
    withDirectives(createElementVNode("input", {
      type: "text",
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.inputValue) = $event)),
      class: "input-text",
      placeholder: "Enter text...",
      onInput: _cache[1] || (_cache[1] = $event => (_ctx.$emit('inputValue', _ctx.inputValue)))
    }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */), [
      [vModelText, _ctx.inputValue]
    ])
  ]))
}

script$e.render = render$e;
script$e.__file = "src/InputText.vue";

var script$d = defineComponent({
    name: 'InputTextarea',
    data() {
        return {
            inputValue: ''
        };
    }
});

function render$d(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("input", {
    type: "textarea",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.inputValue) = $event)),
    onInput: _cache[1] || (_cache[1] = $event => (_ctx.$emit('inputValue', _ctx.inputValue)))
  }, null, 544 /* HYDRATE_EVENTS, NEED_PATCH */)), [
    [vModelText, _ctx.inputValue]
  ])
}

script$d.render = render$d;
script$d.__file = "src/InputTextarea.vue";

var script$c = defineComponent({
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

const _hoisted_1$b = ["href"];
const _hoisted_2$8 = ["src", "alt"];
const _hoisted_3$7 = { id: "title" };
const _hoisted_4$5 = { id: "summary" };

function render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("a", {
    id: "container",
    href: _ctx.url
  }, [
    renderSlot(_ctx.$slots, "image", { image: _ctx.image }, () => [
      createElementVNode("img", {
        src: _ctx.image,
        alt: _ctx.title,
        id: "image"
      }, null, 8 /* PROPS */, _hoisted_2$8)
    ]),
    renderSlot(_ctx.$slots, "title", { title: _ctx.title }, () => [
      createElementVNode("div", _hoisted_3$7, toDisplayString(_ctx.title), 1 /* TEXT */)
    ]),
    renderSlot(_ctx.$slots, "summary", { summary: _ctx.summary }, () => [
      createElementVNode("div", _hoisted_4$5, toDisplayString(_ctx.summary), 1 /* TEXT */)
    ])
  ], 8 /* PROPS */, _hoisted_1$b))
}

script$c.render = render$c;
script$c.__scopeId = "data-v-1447a38f";
script$c.__file = "src/PreviewCard.vue";

var script$b = {
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

const _hoisted_1$a = { class: "pagination" };
const _hoisted_2$7 = ["disabled"];
const _hoisted_3$6 = { class: "pagination-pages" };
const _hoisted_4$4 = ["onClick"];
const _hoisted_5$3 = ["disabled"];

function render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1$a, [
    createElementVNode("button", {
      class: "pagination-button",
      disabled: $props.currentPage === 1,
      onClick: _cache[0] || (_cache[0] = $event => ($options.goToPage($props.currentPage - 1)))
    }, [
      renderSlot(_ctx.$slots, "prev", {}, () => [
        createTextVNode(" Prev ")
      ])
    ], 8 /* PROPS */, _hoisted_2$7),
    createElementVNode("div", _hoisted_3$6, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.totalPages, (page) => {
        return (openBlock(), createElementBlock("button", {
          key: page,
          class: normalizeClass(['pagination-page', { active: page === $props.currentPage }]),
          onClick: $event => ($options.goToPage(page))
        }, [
          renderSlot(_ctx.$slots, `${page}-page`, { page: page }, () => [
            createTextVNode(toDisplayString(page), 1 /* TEXT */)
          ])
        ], 10 /* CLASS, PROPS */, _hoisted_4$4))
      }), 128 /* KEYED_FRAGMENT */))
    ]),
    createElementVNode("button", {
      class: "pagination-button",
      disabled: $props.currentPage === $props.totalPages,
      onClick: _cache[1] || (_cache[1] = $event => ($options.goToPage($props.currentPage + 1)))
    }, [
      renderSlot(_ctx.$slots, "next", {}, () => [
        createTextVNode(" Next ")
      ])
    ], 8 /* PROPS */, _hoisted_5$3)
  ]))
}

script$b.render = render$b;
script$b.__file = "src/Pagination.vue";

var script$a = {
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

const _hoisted_1$9 = { class: "table" };

function render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("table", _hoisted_1$9, [
    createElementVNode("thead", null, [
      createElementVNode("tr", null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($props.columns, (column) => {
          return (openBlock(), createElementBlock("th", {
            key: column.key
          }, [
            renderSlot(_ctx.$slots, column.label, {}, () => [
              renderSlot(_ctx.$slots, "label", {}, () => [
                createTextVNode(toDisplayString(column.label), 1 /* TEXT */)
              ])
            ])
          ]))
        }), 128 /* KEYED_FRAGMENT */))
      ])
    ]),
    createElementVNode("tbody", null, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.items, (item) => {
        return (openBlock(), createElementBlock("tr", {
          key: item.id
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($props.columns, (column) => {
            return (openBlock(), createElementBlock("td", {
              key: column.key
            }, [
              renderSlot(_ctx.$slots, column.key, {}, () => [
                renderSlot(_ctx.$slots, "column", {}, () => [
                  createTextVNode(toDisplayString(item[column.key]), 1 /* TEXT */)
                ])
              ])
            ]))
          }), 128 /* KEYED_FRAGMENT */))
        ]))
      }), 128 /* KEYED_FRAGMENT */))
    ])
  ]))
}

script$a.render = render$a;
script$a.__file = "src/Table.vue";

var script$9 = {
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

function render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("button", {
    class: normalizeClass($options.buttonClasses),
    onClick: _cache[0] || (_cache[0] = $event => (_ctx.$emit('click')))
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2 /* CLASS */))
}

script$9.render = render$9;
script$9.__file = "src/Button.vue";

var script$8 = {
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

const _hoisted_1$8 = { class: "accordion" };
const _hoisted_2$6 = {
  key: 0,
  class: "accordion-content"
};

function render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1$8, [
    renderSlot(_ctx.$slots, "header", { onClick: $options.toggleAccordion }, () => [
      createElementVNode("button", {
        class: "accordion-header",
        onClick: _cache[0] || (_cache[0] = (...args) => ($options.toggleAccordion && $options.toggleAccordion(...args)))
      }, toDisplayString($props.header), 1 /* TEXT */)
    ]),
    createVNode(Transition, { name: "accordion-transition" }, {
      default: withCtx(() => [
        ($data.isOpen)
          ? (openBlock(), createElementBlock("div", _hoisted_2$6, [
              renderSlot(_ctx.$slots, "content", {}, () => [
                createTextVNode(toDisplayString($props.content), 1 /* TEXT */)
              ])
            ]))
          : createCommentVNode("v-if", true)
      ]),
      _: 3 /* FORWARDED */
    })
  ]))
}

script$8.render = render$8;
script$8.__file = "src/Accordion.vue";

var script$7 = {
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

const _hoisted_1$7 = { class: "form-dropdown" };
const _hoisted_2$5 = ["for"];
const _hoisted_3$5 = ["id"];
const _hoisted_4$3 = ["value"];

function render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1$7, [
    createElementVNode("label", {
      for: $props.id,
      class: "form-dropdown-label"
    }, toDisplayString($props.label), 9 /* TEXT, PROPS */, _hoisted_2$5),
    withDirectives(createElementVNode("select", {
      id: $props.id,
      class: "form-dropdown-select",
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($data.selectedOption) = $event))
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.options, (option) => {
        return (openBlock(), createElementBlock("option", {
          value: option.value,
          key: option.value
        }, [
          renderSlot(_ctx.$slots, "options", {
            value: option.label
          }, () => [
            createTextVNode(toDisplayString(option.label), 1 /* TEXT */)
          ])
        ], 8 /* PROPS */, _hoisted_4$3))
      }), 128 /* KEYED_FRAGMENT */))
    ], 8 /* PROPS */, _hoisted_3$5), [
      [vModelSelect, $data.selectedOption]
    ])
  ]))
}

script$7.render = render$7;
script$7.__file = "src/Dropdown.vue";

var script$6 = {
    props: {
        id: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        multiple: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            files: []
        };
    },
    methods: {
        handleFileChange(event) {
            const newFiles = Array.from(event.target.files);
            this.files = this.multiple ? [...this.files, ...newFiles] : newFiles;
            this.$emit('input', this.files);
        },
        removeFile(file) {
            this.files = this.files.filter(f => f !== file);
            this.$emit('input', this.files);
        }
    }
};

const _hoisted_1$6 = { class: "file-upload" };
const _hoisted_2$4 = ["for"];
const _hoisted_3$4 = ["id", "multiple"];
const _hoisted_4$2 = {
  key: 0,
  class: "file-list"
};
const _hoisted_5$2 = { class: "file-name" };
const _hoisted_6 = ["onClick"];

function render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1$6, [
    createElementVNode("label", {
      for: $props.id,
      class: "file-upload-label"
    }, toDisplayString($props.label), 9 /* TEXT, PROPS */, _hoisted_2$4),
    createElementVNode("input", {
      id: $props.id,
      type: "file",
      class: "file-upload-input",
      onChange: _cache[0] || (_cache[0] = (...args) => ($options.handleFileChange && $options.handleFileChange(...args))),
      multiple: $props.multiple
    }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_3$4),
    ($data.files.length > 0)
      ? (openBlock(), createElementBlock("ul", _hoisted_4$2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($data.files, (file) => {
            return (openBlock(), createElementBlock("li", {
              key: file.name,
              class: "file-item"
            }, [
              createElementVNode("span", _hoisted_5$2, toDisplayString(file.name), 1 /* TEXT */),
              createElementVNode("button", {
                class: "file-remove",
                onClick: $event => ($options.removeFile(file))
              }, " Remove ", 8 /* PROPS */, _hoisted_6)
            ]))
          }), 128 /* KEYED_FRAGMENT */))
        ]))
      : createCommentVNode("v-if", true)
  ]))
}

script$6.render = render$6;
script$6.__file = "src/FileUpload.vue";

var script$5 = {
    props: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        value: {
            type: [String, Number, Boolean],
            required: true
        },
        label: {
            type: String,
            required: true
        },
        checked: {
            type: [String, Number, Boolean],
            default: null
        }
    },
    computed: {
        isChecked() {
            return this.value === this.checked;
        }
    },
    methods: {
        handleRadioChange() {
            this.$emit('change', this.value);
        }
    }
};

const _hoisted_1$5 = ["for"];
const _hoisted_2$3 = ["id", "name", "value", "checked"];
const _hoisted_3$3 = { class: "radio-button-label" };

function render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("label", {
    for: $props.id,
    class: "radio-button"
  }, [
    createElementVNode("input", {
      type: "radio",
      id: $props.id,
      name: $props.name,
      value: $props.value,
      checked: $options.isChecked,
      onChange: _cache[0] || (_cache[0] = (...args) => ($options.handleRadioChange && $options.handleRadioChange(...args)))
    }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_2$3),
    createElementVNode("span", _hoisted_3$3, toDisplayString($props.label), 1 /* TEXT */)
  ], 8 /* PROPS */, _hoisted_1$5))
}

script$5.render = render$5;
script$5.__file = "src/RadioButton.vue";

var script$4 = {
    components: {
        RadioButton: script$5
    },
    props: {
        name: {
            type: String,
            required: true
        },
        options: {
            type: Array,
            required: true
        },
        value: {
            type: [String, Number, Boolean],
            required: true
        }
    },
    methods: {
        handleRadioChange(newValue) {
            this.$emit('change', newValue);
        }
    }
};

const _hoisted_1$4 = { class: "radio-group" };

function render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_radio_button = resolveComponent("radio-button");

  return (openBlock(), createElementBlock("div", _hoisted_1$4, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.options, (option) => {
      return (openBlock(), createElementBlock("div", {
        key: option.value
      }, [
        createVNode(_component_radio_button, {
          id: `${$props.name}-${option.value}`,
          name: $props.name,
          value: option.value,
          label: option.label,
          checked: $props.value,
          onChange: $options.handleRadioChange
        }, null, 8 /* PROPS */, ["id", "name", "value", "label", "checked", "onChange"])
      ]))
    }), 128 /* KEYED_FRAGMENT */))
  ]))
}

script$4.render = render$4;
script$4.__file = "src/RadioGroup.vue";

var script$3 = {
    props: {
        title: {
            type: String,
            default: 'Dialog'
        },
        cancelText: {
            type: String,
            default: 'Cancel'
        },
        confirmText: {
            type: String,
            default: 'Confirm'
        },
        isOpen: {
            type: Boolean,
            default: false,
        }
    },
    methods: {
        closeDialog() {
            this.$emit('close');
            document.body.classList.remove('dialog-open');
        },
        confirmDialog() {
            this.$emit('confirm');
            this.closeDialog();
        }
    }
};

const _hoisted_1$3 = { class: "dialog-content" };
const _hoisted_2$2 = { class: "dialog-header" };
const _hoisted_3$2 = { class: "dialog-title" };
const _hoisted_4$1 = { class: "dialog-body" };
const _hoisted_5$1 = { class: "dialog-footer" };

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(["dialog", { 'dialog-open': $props.isOpen }])
  }, [
    createElementVNode("div", {
      class: "dialog-overlay",
      onClick: _cache[0] || (_cache[0] = (...args) => ($options.closeDialog && $options.closeDialog(...args)))
    }),
    createElementVNode("div", _hoisted_1$3, [
      createElementVNode("div", _hoisted_2$2, [
        createElementVNode("h2", _hoisted_3$2, toDisplayString($props.title), 1 /* TEXT */),
        createElementVNode("button", {
          class: "dialog-close",
          onClick: _cache[1] || (_cache[1] = (...args) => ($options.closeDialog && $options.closeDialog(...args)))
        }, "X")
      ]),
      createElementVNode("div", _hoisted_4$1, [
        renderSlot(_ctx.$slots, "default")
      ]),
      createElementVNode("div", _hoisted_5$1, [
        createElementVNode("button", {
          class: "dialog-button dialog-cancel",
          onClick: _cache[2] || (_cache[2] = (...args) => ($options.closeDialog && $options.closeDialog(...args)))
        }, toDisplayString($props.cancelText), 1 /* TEXT */),
        createElementVNode("button", {
          class: "dialog-button dialog-confirm",
          onClick: _cache[3] || (_cache[3] = (...args) => ($options.confirmDialog && $options.confirmDialog(...args)))
        }, toDisplayString($props.confirmText), 1 /* TEXT */)
      ])
    ])
  ], 2 /* CLASS */))
}

script$3.render = render$3;
script$3.__file = "src/Dialog.vue";

var script$2 = {
    data() {
        return {
            currentIndex: 0,
            translateX: 0
        };
    },
    props: {
        slides: {
            type: Array,
            required: true
        },
        interval: {
            type: Number,
            default: 5000
        }
    },
    mounted() {
        this.startCarousel();
    },
    beforeUnmount() {
        this.stopCarousel();
    },
    methods: {
        previousSlide() {
            this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
            this.updateTranslateX();
        },
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.slides.length;
            this.updateTranslateX();
        },
        updateTranslateX() {
            this.translateX = -this.currentIndex * 100;
        },
        startCarousel() {
            this.carouselInterval = setInterval(this.nextSlide, this.interval);
        },
        stopCarousel() {
            clearInterval(this.carouselInterval);
        }
    }
};

const _hoisted_1$2 = { class: "carousel" };
const _hoisted_2$1 = ["src", "alt"];
const _hoisted_3$1 = { class: "carousel-controls" };

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1$2, [
    createElementVNode("div", {
      class: "carousel-slides",
      style: normalizeStyle({ transform: `translateX(${$data.translateX}px)` })
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.slides, (slide, index) => {
        return (openBlock(), createElementBlock("div", {
          key: index,
          class: "carousel-slide"
        }, [
          createElementVNode("img", {
            src: slide.image,
            alt: slide.alt,
            class: "carousel-image"
          }, null, 8 /* PROPS */, _hoisted_2$1)
        ]))
      }), 128 /* KEYED_FRAGMENT */))
    ], 4 /* STYLE */),
    createElementVNode("div", _hoisted_3$1, [
      createElementVNode("button", {
        class: "carousel-control",
        onClick: _cache[0] || (_cache[0] = (...args) => ($options.previousSlide && $options.previousSlide(...args)))
      }, "‹"),
      createElementVNode("button", {
        class: "carousel-control",
        onClick: _cache[1] || (_cache[1] = (...args) => ($options.nextSlide && $options.nextSlide(...args)))
      }, "›")
    ])
  ]))
}

script$2.render = render$2;
script$2.__file = "src/Carousel.vue";

var script$1 = {
    data() {
        return {
            isOpen: false
        };
    },
    props: {
        position: {
            type: String,
            default: 'left',
            validator: value => ['left', 'right'].includes(value)
        }
    },
    methods: {
        toggleNavbar() {
            this.isOpen = !this.isOpen;
        }
    }
};

const _hoisted_1$1 = { class: "navbar-content" };

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    class: normalizeClass(['navbar', { 'navbar-open': $data.isOpen, 'navbar-left': $props.position === 'left', 'navbar-right': $props.position === 'right' }])
  }, [
    createElementVNode("button", {
      class: "navbar-toggle",
      onClick: _cache[0] || (_cache[0] = (...args) => ($options.toggleNavbar && $options.toggleNavbar(...args)))
    }, "☰"),
    createElementVNode("div", _hoisted_1$1, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 2 /* CLASS */))
}

script$1.render = render$1;
script$1.__file = "src/NavBar.vue";

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
        value: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isChecked: this.value
        };
    },
    methods: {
        handleChange() {
            this.$emit('input', this.isChecked);
        }
    }
};

const _hoisted_1 = { class: "checkbox" };
const _hoisted_2 = ["for"];
const _hoisted_3 = ["id"];
const _hoisted_4 = /*#__PURE__*/createElementVNode("span", { class: "checkbox-custom" }, null, -1 /* HOISTED */);
const _hoisted_5 = { class: "checkbox-text" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("label", {
      for: $props.id,
      class: "checkbox-label"
    }, [
      withDirectives(createElementVNode("input", {
        id: $props.id,
        type: "checkbox",
        class: "checkbox-input",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($data.isChecked) = $event)),
        onChange: _cache[1] || (_cache[1] = (...args) => ($options.handleChange && $options.handleChange(...args)))
      }, null, 40 /* PROPS, HYDRATE_EVENTS */, _hoisted_3), [
        [vModelCheckbox, $data.isChecked]
      ]),
      _hoisted_4,
      createElementVNode("span", _hoisted_5, toDisplayString($props.label), 1 /* TEXT */)
    ], 8 /* PROPS */, _hoisted_2)
  ]))
}

script.render = render;
script.__file = "src/Checkbox.vue";

var components = {
    InputTextarea: script$d,
    InputText: script$e,
    PreviewCard: script$c,
    Pagination: script$b,
    Table: script$a,
    Button: script$9,
    Accordion: script$8,
    Dropdown: script$7,
    FileUpload: script$6,
    RadioGroup: script$4,
    RadioButton: script$5,
    Dialog: script$3,
    Carousel: script$2,
    NavBar: script$1,
    Checkbox: script
};

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
