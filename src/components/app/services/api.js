export class ApiService {
    url = 'http://localhost:5000';

    constructor($http){
        this.http = $http;
    }

    getBands(){
        // return this.http.get(`${this.url}/bands`)
        //     .then(response => response.data);

        const response = {
            data: [
                { id: 1, name: 'Pescado Rabioso'},
                { id: 2, name: 'Spinetta jade'}
            ]
        }

        return response;
    }

    //getBand(bandId)

    // getArtists(bandId)

    // getAlbums(bandId)

    // getAlbum(albumId)

    // getTrack(trackId)

    // getCommentsForTrack(trackId)

    // postCommentForTrack(postData)

}
