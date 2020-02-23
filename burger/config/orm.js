var connection = require("./connection.js");

var orm = {


/// selectAll()    
    selectWhere: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },

  
/// insert()
    function (table, column, values,cb) {
    var columnString = column.toString();
    var valuesString = "" + values + "";
    var queryString = 'INSERT INTO' + table + '(' + columnString + ')' + 'VALUES(' + values + "" + ');'
    console.log(queryString)
    connection.query(queryString, values, function(err, result) {
        if (err) throw err;
        cb (result);
    });
},

/// updated()


    function  (table, column,newValue,condition, cb) {
    //UPDATE `burgers_db`.`burgers` SET `burger_name`='lz' WHERE `id`='5';
    var queryString = 'UPDATE ' + table + ' SET ' + column + '=' + newValue + ' WHERE ' + condition + ';'
    console.log(queryString);
    connection.query(queryString, function (err, result) {
        if (err) throw err;
        cb(result);
    });
},



 
};

module.exports = orm;
