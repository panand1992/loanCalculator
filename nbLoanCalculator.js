(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['nbLoanCalculator'], factory);
    } else {
        // Browser globals
        root.nbLoanCalculator = factory(root.options);
    }
}(window, function(options) {

    var nbLoanCalculator = {

		getLoanInterest : function(options){
			
		}
    }

    return nbLoanCalculator;

}));
