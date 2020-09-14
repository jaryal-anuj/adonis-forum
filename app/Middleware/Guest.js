'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Guest {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ response, auth}, next) {
	let authenticated = true;
	try{
		authenticated =await auth.check()
	}catch(error){
		authenticated = false;
	}

	if(authenticated){
		return response.route('home');
	}
    await next()
  }
}

module.exports = Guest
