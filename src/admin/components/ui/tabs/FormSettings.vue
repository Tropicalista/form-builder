<script>
export default {
  render (createElement) {

    var self = this

    let childArray = []


    const labelDiv = createElement(
      'div',
      {
        class: 'md-layout-item md-size-15'
      },
      [
        createElement('label', {
          domProps: {
            innerHTML: self.label
          }
        }, this.$slots.default)
      ]
    )

    childArray.push(labelDiv)

    const inputDiv = createElement(
      'div',
      {
        class: 'md-layout-item'
      },
      [
        createElement('input', {
          class: 'regular-text',
          domProps: {
            value: self.value,
            type: 'text'
          },
          on: {
            input: function (event) {
              self.$emit('input', event.target.value)
            }
          }
        }, this.$slots.default)
      ]
    )

    childArray.push(inputDiv)

    return createElement(
      'div',   // tag name
      {
        class: 'md-layout md-gutter'
      },
      childArray
    )
  },
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  }
}
</script>