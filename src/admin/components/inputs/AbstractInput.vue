<script>
export default {
  render (createElement) {

    let childArray = []

    if( this.field.label ){

        const label = createElement('label', {
          attrs: {
            for: this.field.label
          },
          // DOM properties
          domProps: {
            innerHTML: this.field.label
          },
        }, this.$slots.default)
        childArray.push(label)
    }

    const input = createElement('input', {
      attrs: this.field.attrs,
    }, this.$slots.default)

    childArray.push(input)

    if( this.field.description ){
        const description = createElement('p', {
          domProps: {
            innerHTML: this.field.description
          },
        }, this.$slots.default)       
        childArray.push(description)
    }

    return createElement(
      this.field.wrapper,   // tag name
      childArray
    )
  },
  props: {
    field: {
      type: Object,
      required: true
    }
  }
}
</script>