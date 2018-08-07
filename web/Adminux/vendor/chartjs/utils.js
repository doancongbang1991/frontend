window.chartColors = {
	red: 'rgb(255, 98, 98)',
	orange: 'rgb(240, 173, 78)',
	yellow: 'rgb(255, 184, 3)',
	green: 'rgb(44, 196, 205)',
	blue: 'rgb(108, 139, 239)',
	purple: 'rgb(97, 61, 124)',
	grey: 'rgb(231,233,237)'
};


window.randomScalingFactor = function() {
	return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
}