define(['backbone','./TraitView'],
	function (Backbone, TraitView) {

	return TraitView.extend({

    /**
		 * Returns input element
		 * @return {HTMLElement}
		 * @private
		 */
		getInputEl: function() {
      if(!this.$input){
        var opts = this.model.get('options') || [];
        this.input = '<select>';
				if(opts.length){
					_.each(opts, function(el){
            var name, value, style;
            var attrs = '';
            if(typeof el === 'string'){
              name = el;
              value = el;
            }else{
              name = el.name ? el.name : el.value;
              value = el.value.replace(/"/g,'&quot;');
              style = el.style ? el.style.replace(/"/g,'&quot;') : '';
              attrs += style ? 'style="' + style + '"' : '';
            }
						this.input += '<option value="' + value + '" ' + attrs + '>' + name + '</option>';
					}, this);
				}
				this.input 	+= '</select>';
				this.$input = $(this.input);
      }
			return this.$input.get(0);
		},

	});
});