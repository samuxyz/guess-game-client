import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

export const Add = React.createClass({
	mixins: [PureRenderMixin],
	uploadImg: function() {
		filepicker.pick(
		  function(Blob){
		    console.log(JSON.stringify(Blob));
		    const handler = Blob.url.substring(Blob.url.lastIndexOf('/') + 1);
		    console.log(handler);
		    document.getElementById('button-upload').dataset.handler = handler;
		  }
		);
	},
	submitCharacter: function() {
		const name = document.getElementById('name').value;
		const option1 = document.getElementById('option1').value;
		const option2 = document.getElementById('option2').value;
		const picture = document.getElementById('button-upload').dataset.handler;
		const character = {picture, option1, option2, name};
		console.log(character);
		this.props.add(character);
	},
	render: function() {
		return ( <div className="container">
			<div className="row">
				<div className=".col-md-offset-4 media-list">
					<div className="panel panel-default">
						<div className="panel-heading">
							<h2 className="panel-title text-center">
							<span className="glyphicon glyphicon-upload"></span> Upload Character
							</h2>
						</div>
						<div className="panel-body">
							<form name="imageForm" noValidate>
								<div className="form-group">
									<label htmlFor="name">Name</label>
									<input id="name" type="text" className="form-control" placeholder="Enter the real name..." required/>
								</div>
								<div className="form-group">
									<label htmlFor="option1">option1</label>
									<input id="option1" type="text" className="form-control" placeholder="Enter the option1..." required/>
								</div>
								<div className="form-group">
									<label htmlFor="option2">option2</label>
									<input id="option2" type="text" className="form-control" placeholder="Enter the option2..." required/>
								</div>
								<div className="form-group ">
				          <label htmlFor="picture">File</label>
				          <div className="text-center dropup">
				            <button id="button-upload" type="button" className="btn btn-default filepicker" onClick={() => this.uploadImg()}>
				              Upload <span className="caret"></span>
				            </button>
				             
				          </div>
				        </div>
								<button className="btn btn-filestack btn-block" onClick={() => this.submitCharacter()}>Submit</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div> );
	}
});

export const AddContainer = connect(function(){ return {}}, actionCreators)(Add);