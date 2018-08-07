"use strict"
var foo = document.getElementById("foo");
Sortable.create(foo, { group: "omega" });

var bar = document.getElementById("bar");
Sortable.create(bar, { group: "omega" });

/*
var container = document.getElementById("multi");
var sort = Sortable.create(container, {
  animation: 150, // ms, animation speed moving items when sorting, `0` — without animation
  handle: ".card-header", // Restricts sort start click/touch to the specified element
  draggable: ".tile", // Specifies which items inside the element should be sortable
  onUpdate: function (evt){
    var item = evt.item; // the current dragged HTMLElement
  }
});
/*
var userlist = document.getElementById("user_list");
Sortable.create(userlist, { group: "users", draggable: ".dragable_img" });
var userlist2 = document.getElementById("user_list2");
Sortable.create(userlist2, { group: "users", draggable: ".dragable_img" });
var userlist3 = document.getElementById("user_list3");
Sortable.create(userlist3, { group: "users", draggable: ".dragable_img" });
var userlist4 = document.getElementById("user_list4");
Sortable.create(userlist4, { group: "users", draggable: ".dragable_img" });
*/

// Multi groups
	Sortable.create(document.getElementById('multi'), {
		animation: 150,
		draggable: '.tile',
		handle: '.card-header'
	});

	[].forEach.call(document.getElementById('multi').getElementsByClassName('user_list'), function (el){
		Sortable.create(el, {
			group: 'photo',
			animation: 150
		});
	});


// Advanced groups
	[{
		name: 'advanced',
		pull: true,
		put: true
	},
	{
		name: 'advanced',
		pull: 'clone',
		put: false
	}, {
		name: 'advanced',
		pull: false,
		put: true
	}].forEach(function (groupOpts, i) {
		Sortable.create(document.getElementById('advanced-' + (i + 1)), {
			sort: (i != 1),
			group: groupOpts,
			animation: 150
		});
	});
Sortable.create(document.getElementById('handle'), {
		handle: '.drag-handle',
		animation: 150
	});