var AppActions = require('../actions/AppActions');

module.exports = {
	addNote: function (note) {
        $.ajax({
            url: "https://api.mongolab.com/api/1/databases/sticknote/collections/notes?apiKey=8ML9JON5NXaG3C_3XITrX4x1Grdazsbd",
            data: JSON.stringify(note),
            type: "POST",
            contentType: "application/json"
        });
    },
    getNotes: function () {

        $.ajax({
            url: "https://api.mongolab.com/api/1/databases/sticknote/collections/notes?apiKey=8ML9JON5NXaG3C_3XITrX4x1Grdazsbd",
            dataType: 'json',
            cache: false,
            success: function (data) {
                console.log(data);
                AppActions.receiveNotes(data);
            }.bind(this),
            error: function (xhr, status, err) {
                console.log(err);
            }.bind(this)
        })
    },
    removeNote: function (noteID) {
        $.ajax({
            url: "https://api.mongolab.com/api/1/databases/sticknote/collections/notes/"+noteID+"?apiKey=8ML9JON5NXaG3C_3XITrX4x1Grdazsbd",
            type: "DELETE",
            async: true,
            timeout: 300000,
            success: function(data){
                console.log('Note Deleted...');
            }.bind(this),
            error: function(xhr, status, err){
                console.log(err);
            }.bind(this)
        });

    }
}