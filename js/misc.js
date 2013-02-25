
//
// Set a "singleton" class/object for document dimensions
//
screendim = new function() {
	this.width	= 0;
	this.height	= 0;
	
	this.dimensions_find = function() {
		if (self.innerHeight) // all except Explorer
		{
			this.width 	= self.innerWidth;
			this.height = self.innerHeight;
		}
		else if (document.documentElement && document.documentElement.clientHeight)
			// Explorer 6 Strict Mode
		{
			this.width	= document.documentElement.clientWidth;
			this.height = document.documentElement.clientHeight;
		}
		else if (document.body) // other Explorers
		{
			this.width	= document.body.clientWidth;
			this.height = document.body.clientHeight;
		}		
	};
}

window.onload = function() {
	screendim.dimensions_find();
	pageTopBar	= document.getElementById('topbar');
	pageBody 	= document.getElementById('wrap');
	pageCredit	= document.getElementById('credit');
	
	topBarHeight	= pageTopBar.offsetHeight;
	creditHeight	= pageCredit.offsetHeight;
	
	bodyHeight 		= screendim.height - (topBarHeight + creditHeight);
	str_bodyHeight	= bodyHeight.toString() + 'px';
	pageBody.style.height = str_bodyHeight;
}