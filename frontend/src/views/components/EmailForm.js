import React, { Component } from 'react';

import Mailchimp from 'react-mailchimp-form';

export default class EmailForm extends Component {
	render() {
		const action_url =
			'https://agirti.us18.list-manage.com/subscribe/post?u=f177c6fb4788f8f4ef57bde9c&amp;id=fa7483c398';

		return (
			<Mailchimp
				action={action_url}
				fields={[
					{
						name: 'EMAIL',
						placeholder: 'EMAIL',
						type: 'email',
						required: true
					}
				]}
			/>
		);
	}
}
