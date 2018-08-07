"use strict";
$(document).on('ready', function(){
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
		$('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'month,agendaWeek,agendaDay,listWeek'
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
					$('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
				}
				$('#calendar').fullCalendar('unselect');
                
			},
            events: [
				{
					title: 'All Day Event',
					start: '2017-04-01',
                    color:'#2cc4cd'
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: '2017-02-09T16:00:00',
                    color:'#2cc4cd'
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: '2017-04-16T16:00:00',
                    color:'#ff6262'
				},
				{
					title: 'Meeting',
					start: '2017-04-12T10:30:00',
					end: '2017-02-12T12:30:00',
                    color:'#2cc4cd'
				},
				{
					title: 'Lunch',
					start: '2017-04-12T12:00:00',
                    color:'#ffb100'
				},
				{
					title: 'Meeting',
					start: '2017-04-12T14:30:00',
                    color:'#6c8bef'
				},
				{
					title: 'Happy Hour',
					start: '2017-04-12T17:30:00',
                    color:'#6c8bef'
				},
				{
					title: 'Dinner',
					start: '2017-04-12T20:00:00',
                    color:'#ffb100'
				},
				{
					title: 'Birthday Party',
					start: '2017-04-13T07:00:00',
                    color:'#ffb100'
				},
				{
					title: 'Click for Google',
					url: 'http://google.com/',
					start: '2017-04-28',
                    color:'#2cc4cd'
				},

				// red areas where no events can be dropped
				{
					start: '2017-04-17',
					end: '2017-04-20',
					overlap: false,
					rendering: 'background',
					color: '#ff6262'
				},
				{
					start: '2017-04-14',
					end: '2017-04-16',
					overlap: false,
					rendering: 'background',
					color: '#ff6262'
				}

			],
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