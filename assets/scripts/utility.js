// First arg is the container of your items, and then the items you want to set
// equal height between them. Use css selector to target them
// Size is the width up to which the function will work
// Call this function in your resize eventListener to update the value while resizing the navigator
// Example : setEqualHeight('section.cover', 1250, 'block__header', 'block__content');

function setEqualHeight(parent, size, ...elements) {

	if (parent !== undefined && elements.length > 0) {

		var container = new Object;
		container.global = document.querySelector(parent);

		if (container.global) {
			container.elements = [];

			for (var i = 0; i < elements.length; i++) {
				container.elements.push({
					height: 0,
					items: container.global.querySelectorAll(elements[i]),
				})
			}

			if (window.innerWidth > size) {

				for (var i = 0; i < container.elements.length; i++) {
					for (var a = 0; a < container.elements[i].items.length; a++) {

						container.elements[i].items[a].style.height = "initial";
						var currentHeight = container.elements[i].items[a].offsetHeight;

						if (currentHeight > container.elements[i].height) {
							container.elements[i].height = currentHeight;
						}

					}
				}

				for (var i = 0; i < container.elements.length; i++) {
					for (var a = 0; a < container.elements[i].items.length; a++) {
						container.elements[i].items[a].style.height = container.elements[i].height + "px";
					}
				}

			} else {

				for (var i = 0; i < container.elements.length; i++) {
					for (var a = 0; a < container.elements[i].items.length; a++) {
						container.elements[i].items[a].style.height = "initial";
					}
				}

			}
		}

	} else {
		console.log("Something went wrong, check arguments that you need to use this function");
	}
}

// Display borders around all elements to see if something is wrong

function debuggerLayout() {
	[].forEach.call($$("*"), function(a) {
		a.style.outline =
		"1px solid #" + (~~(Math.random() * (1 << 24))).toString(16);
	});
}