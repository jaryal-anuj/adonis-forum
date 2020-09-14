'use strict'

const Post = use('App/Models/Post');


class TagPostController {

	async index({view, params,request}){

		let posts = await Post.query()
								.forIndex()
								.whereHas('tag',(builder)=>{
									builder.where('slug',params.slug)
								})
								.paginate(request.input('page',1),2)
		//console.log(posts.toJSON()[0].lastReply)
		return view.render('index',{posts});
	}

	// async index({view, params}){
	// 	const tag =await Tag.query().where('slug','=',params.slug).firstOrFail()
	// 	let posts = await Post.query()
	// 							.forIndex()
	// 							.where('tag_id','=',tag.id)
	// 							.fetch()
	// 	//console.log(posts.toJSON()[0].lastReply)
	// 	return view.render('index',{posts});
	// }
}

module.exports = TagPostController
