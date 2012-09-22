var collapsers;

function ontoggle(event) {
	var collapsed, target = event.target;
	if (event.target.className == 'collapser') {
		collapsed = target.parentNode.getElementsByClassName('collapsible')[0];
		if (collapsed.parentNode.classList.contains("collapsed"))
			collapsed.parentNode.classList.remove("collapsed");
		else
			collapsed.parentNode.classList.add("collapsed");
	}
}

function onexpand() {
	Array.prototype.forEach.call(collapsers, function(collapsed) {
		if (collapsed.parentNode.classList.contains("collapsed"))
			collapsed.parentNode.classList.remove("collapsed");
	});
}

function onreduce() {
	Array.prototype.forEach.call(collapsers, function(collapsed) {
		if (!collapsed.parentNode.classList.contains("collapsed"))
			collapsed.parentNode.classList.add("collapsed");
	});
}

var onmouseMove = (function() {
	var lastLI;

	function onmouseOut() {
		if (lastLI) {
			lastLI.firstChild.classList.remove("hovered");
			lastLI = null;
		}
	}

	return function(event) {
		var target = event.target, element = target, str = "";
		if (element.tagName != "LI") {
			while (element && element.tagName != "LI")
				element = element.parentNode;
			if (element && element.tagName == 'LI') {
				if (lastLI && element != lastLI)
					lastLI.firstChild.classList.remove("hovered");
				element.firstChild.classList.add("hovered");
				lastLI = element;
				do {
					if (element.parentNode.classList.contains("array")) {
						var index = [].indexOf.call(element.parentNode.children, element);
						str = "[" + index + "]" + str;
					}
					if (element.parentNode.classList.contains("obj")) {
						str = "." + element.firstChild.firstChild.innerText + str;
					}
					element = element.parentNode.parentNode.parentNode;
				} while (element.tagName == "LI");
				if (str.charAt(0) == '.')
					str = str.substring(1);
				return;
			}
		}
		onmouseOut();
	};
})();

