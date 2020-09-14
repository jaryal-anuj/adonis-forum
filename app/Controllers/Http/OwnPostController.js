'use strict'
const Post = use('App/Models/Post');


class OwnPostController {

	async index({view, auth, request}){
		let posts = await Post.query()
								.forIndex()
								.where('user_id','=',auth.user.id)
								.paginate(request.input('page',1),2)
		//console.log(posts.toJSON()[0].lastReply)
		return view.render('index',{posts});
	}
}

module.exports = OwnPostController
