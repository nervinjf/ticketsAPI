const { Admin } = require('../models');

class AdminServices {
    static async create(user){
        try {
            const result = await Admin.create(user)
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getAll(){
        try {
            const result = await Admin.findAll();
            return result;
        } catch (error) {
            throw error;
        }
    }
    
}

module.exports = AdminServices;