export const OrderOccasion = props => {

	const {
		transaction	
	} = props;

	const occasion = transaction.attributes.protectedData.occasion;


	return occasion == 'birthday'?
		(<p>
			<FormattedMessage id="InboxPage.occasionBirthday" />
		</p>)
		: null;

}
