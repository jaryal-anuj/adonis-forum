'use strict'
const Post = use('App/Models/Post');

class UnansweredPostController {

	async index({view, request}){
		let posts = await Post.query()
								.forIndex()
								.doesntHave('replies')
								.paginate(request.input('page',1),2)
		//console.log(posts.toJSON()[0].lastReply)
		return view.render('index',{posts});
	}

}

module.exports = UnansweredPostController
