import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar } from '../ui/Navbar';

import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { messages } from '../../helpers/calendar-messages-es';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { uiOpenModal } from '../../redux/actions/ui';
import { eventClearActiveEvent, eventSetActive, eventStartLoading } from '../../redux/actions/events';
import { AddNewFab } from '../ui/AddNewFab';
import { DeleteEventFab } from '../ui/DeleteEventFab';

moment.locale('es');
const localizer = momentLocalizer(moment);


export const CalendarScreen = () => {
	
	
	const dispatch = useDispatch();

	const { events, activeEvent } = useSelector((state) => state.calendar);
	const { modalOpen } = useSelector((state) => state.ui);
	const { uid } = useSelector((state) => state.auth);
	
	const [lastView, setlastView] = useState(
		localStorage.getItem('lastView') || 'month'
	);

	useEffect(() => {

		dispatch(eventStartLoading())

	}, [dispatch])

	const onDoubleClickEvent = (e) => {
		//console.log(e);
		dispatch(uiOpenModal());
	};

	const onSelectEvent = (e) => {
		dispatch(eventSetActive(e));
	};

	const onViewChage = (e) => {
		setlastView(e);
		localStorage.setItem('lastView', e);
	};

	const onSelectSlot = (e) => {
		dispatch(eventClearActiveEvent())
	};

	const eventStyleGetter = (event, start, end, isSelected) => {
		
		//console.log(event)
		
		const style = {
			backgroundColor: (uid === event.user._id) ? '#367cf7' : '#465660',
			bordeRadius: '0px',
			opacity: 0.8,
			display: 'block',
			color: 'white',
		};

		return {
			style,
		};
	};
	return (
		<div className="calendar-screen">
			<Navbar />

			<Calendar
				localizer={localizer}
				events={events}
				startAccessor="start"
				endAccessor="end"
				messages={messages}
				eventPropGetter={eventStyleGetter}
				onDoubleClickEvent={onDoubleClickEvent}
				onSelectEvent={onSelectEvent}
				onView={onViewChage}
				onSelectSlot={onSelectSlot}
				selectable={true}
				view={lastView}
				components={{
					event: CalendarEvent,
				}}
			/>

			<AddNewFab />

			{(activeEvent && !modalOpen) && <DeleteEventFab />}

			<CalendarModal />
		</div>
	);
};
