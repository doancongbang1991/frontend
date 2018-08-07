"use strict";
$(document).on("ready", function(){
		/* initialize the external events
		-----------------------------------------------------------------*/
		$('#external-events .fc-event, #external-events2 .fc-event').each(function() {
			// store data so the calendar knows to render an event upon drop
			$(this).data('event', {
				title: $.trim($(this).text()), // use the element's text as the event title
				stick: true // maintain when user navigates (see docs on the renderEvent method)
			});
			// make the event draggable using jQuery UI
			$(this).draggable({
				zIndex: 999,
				revert: true,      // will cause the event to go back to its
				revertDuration: 0  //  original position after the drag
			});
		});
		/* initialize the calendar
		-----------------------------------------------------------------*/
		$('#calendar,  #calendar2 ').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay'
			},
			editable: true,
            selectable: true,
			selectHelper: true,
            select: function(start, end) {
                
				var title = prompt('Event Title:');
				var eventData;
				if (title) {
					eventData = {
						title: title,
						start: start,
						end: end
					};
					$('#calendar, #calendar2').fullCalendar('renderEvent', eventData, true); // stick? = true
				}
				$('#calendar, #calendar2').fullCalendar('unselect');
                
			},
			droppable: true,
            // this allows things to be dropped onto the calendar
			drop: function() {
				// is the "remove after drop" checkbox checked?
				if ($('#drop-remove, #drop-remove2').is(':checked')) {
					// if so, remove the element from the "Draggable Events" list
					$(this).remove();
				}
			}
		});
	});