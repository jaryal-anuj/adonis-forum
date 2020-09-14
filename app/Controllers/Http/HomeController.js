'use strict'

const Post = use('App/Models/Post');

class HomeController {
	async index({view,request}){
		let posts = await Post.query()
								.forIndex()
								.paginate(request.input('page',1),2)
		//console.log(posts.toJSON()[0].lastReply)
		return view.render('index',{posts});
	}

	// befor pagination
	// async index({view}){
	// 	let posts = await Post.query()
	// 							.forIndex()
	// 							.fetch()
	// 	//console.log(posts.toJSON()[0].lastReply)
	// 	return view.render('index',{posts});
	// }
}

module.exports = HomeController
