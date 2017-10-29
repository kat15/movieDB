import Settings from './../Settings';

const mDB = require('moviedb')(Settings.apiKey);

export default {

    getListResult: function(err, res, callback, t) {
        let result;
        if (!err) {
            result = {
                page: res.page,
                total_pages: res.total_pages,
                total_results: res.total_results,
                list: res.results
            };
        } else {
            result = null;
        }
        callback(result, t);
    },

    getRecordResult: function(err, res, callback, t) {
        let result;
        if (!err) {
            result = res;
        } else {
            result = null;
        }
        callback(result, t);
    },

    searchAll: function (value, page, language, callback, t) {
        mDB.searchMulti({query: value, page: page, language: language}, (err, res) => {
            this.getListResult(err, res, callback, t);
        });
    },

    searchCompany: function (value, page, language, callback, t) {
        mDB.searchCompany({query: value, page: page, language: language}, (err, res) => {
            this.getListResult(err, res, callback, t);
        });
    },

    searchTV: function (value, page, language, callback, t) {
        mDB.searchTv({query: value, page: page, language: language}, (err, res) => {
            this.getListResult(err, res, callback, t);
        });
    },

    searchMovie: function (value, page, language, callback, t) {
        mDB.searchMovie({query: value, page: page, language: language}, (err, res) => {
            this.getListResult(err, res, callback, t);
        });
    },

    searchPerson: function (value, page, language, callback, t) {
        mDB.searchPerson({query: value, page: page, language: language}, (err, res) => {
            this.getListResult(err, res, callback, t);
        });
    },

    getMovieInfo: function (id, language, callback, t) {
        mDB.movieInfo({id: id, language: language}, (err, res) => {
            this.getRecordResult(err, res, callback, t);
        });
    }

}