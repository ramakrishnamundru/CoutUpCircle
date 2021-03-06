(function ($) {
    
    $.fn.CountUpCircle = function(options){

    	var self = this;
	
	    /**
	    * DEFAULT OPTIONS
	    *
	    * Description
	    *
	    * @param 
	    **/

		var settings = $.extend({
			duration: 5000, //ms
			opacity_anim: false,
			step_divider: 1,
			prefix:"",
      			postfix:""
		}, options);

		var toCount = parseInt(this.html());

		var i 	 		 = 0;
		var step_no=toCount/settings.step_divider;
		var step= settings.duration /step_no;
		var procent_step = 1/step_no;
		var displayNumber = function() {
			i=i+settings.step_divider;
			self.html(settings.prefix+i+settings.postfix);
			if (settings.opacity_anim){
				self.css({'opacity':procent_step*i});
			}
			if (i < toCount - settings.step_divider) {
				setTimeout(displayNumber, step);
			}
			else{
				setTimeout(set_endpoint, step);
			}
		};
		
		var set_endpoint = function (){
			self.html(settings.prefix+toCount+settings.postfix);
		};

		displayNumber();
	}

}(jQuery));
