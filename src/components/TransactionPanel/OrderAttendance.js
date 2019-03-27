
export const OrderAttendance = props => {

	const {
		transaction	
	} = props;

	const attendance = transaction.attributes.protectedData.attendance;

	return (
		<p>
			<FormattedMessage id="InboxPage.bookingFor" />
				{attendance} 
			<FormattedMessage id="InboxPage.attendanceUnit" />
		</p>
	)

}

