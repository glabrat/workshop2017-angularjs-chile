export class ApiService {
    url = 'http://localhost:5000';

    constructor($http){
        this.http = $http;
    }

    getBands(){
        return this.http.get(`${this.url}/bands`)
            .then(response => response.data);

        // const response = {
        //     data: [
        //         { id: 1, name: 'The Beatles', founded: '1990-05-10', ended: '2016-05-10'},
        //         { id: 2, name: 'Spinetta jade', founded: '1990-05-10', ended: '2016-05-10'},
        //     ]
        // }
        //
        // return response.data;
    }

    //getBand(bandId)

    getArtists(bandId) {
        const response = {
            artists: [{
                "url": "https://i.scdn.co/image/96e2e59a1bf0b90cce97035ca48ad017cb9937c9",
                "firstName": "Paul",
                "lastName": "McCartney",
                "birthdate": "1942-06-18T00:00:00-0300",
                "instrument": "bass",
                "docType": "ARTIST"
            },{
                "url": "https://i.scdn.co/image/47e00040660be1a06ce84821fcbe3fb68c658e1a",
                "firstName": "John",
                "lastName": "Lennon",
                "birthdate": "1940-10-09T00:00:00-0300",
                "instrument": "voice",
                "docType": "ARTIST"
            },{
                "url": "https://i.scdn.co/image/33028dadc690dd2ceb3a01762a13e594f8e9d937",
                "firstName": "Ringo",
                "lastName": "Starr",
                "birthdate": "1940-07-07T00:00:00-0300",
                "instrument": "drums",
                "docType": "ARTIST"
            },{
                "url": "https://i.scdn.co/image/4d9990ce9e262cd5c0bfb1aef5ee4380d3f3dc66",
                "firstName": "George",
                "lastName": "Harrison",
                "birthdate": "1943-02-25T00:00:00-0300",
                "instrument": "guitar",
                "docType": "ARTIST"
            }],
        };

        return response.artists;
    }

    getAlbums(bandId) {
        const response = {
            albums: [{"docType":"ALBUM","name":"Live At The Hollywood Bowl","url":"https://i.scdn.co/image/94c04cbf2ea221d53c4ca2c93c8228c39945a180","releaseDate":"2016-09-09"},{"docType":"ALBUM","name":"Live At The Hollywood Bowl","url":"https://i.scdn.co/image/1b1879c1dd1613586f9bcd1bdc51aa45146a86be","releaseDate":"2016-09-09"},{"docType":"ALBUM","name":"Love","url":"https://i.scdn.co/image/cba8cf31b21ee3d97e55f48cef1f423ae0b169d9","releaseDate":"2006-11-17"},{"docType":"ALBUM","name":"1 (Remastered)","url":"https://i.scdn.co/image/9ecfdf528562cae879748b73bd81b64dfa3d5704","releaseDate":"2000-11-13"},{"docType":"ALBUM","name":"1 (Remastered)","url":"https://i.scdn.co/image/4e6916b16ce51c241c16f4d642360443aeb7b4df","releaseDate":"2000-11-13"},{"docType":"ALBUM","name":"Let It Be (Remastered)","url":"https://i.scdn.co/image/b3651a85f2bca826b38194c51d09cd7b068aa3ab","releaseDate":"1970-05-08"},{"docType":"ALBUM","name":"Let It Be (Remastered)","url":"https://i.scdn.co/image/809c6f28db643023d76b9cb650a8ea59689a3af2","releaseDate":"1970-05-08"},{"docType":"ALBUM","name":"Abbey Road (Remastered)","url":"https://i.scdn.co/image/9cab76ad73ce2adbacbd118ebc632255ce7c1841","releaseDate":"1969-09-26"},{"docType":"ALBUM","name":"Abbey Road (Remastered)","url":"https://i.scdn.co/image/c429243cd056974175abe72a3142d3dccffc166a","releaseDate":"1969-09-26"},{"docType":"ALBUM","name":"Yellow Submarine (Remastered)","url":"https://i.scdn.co/image/411d661890b87bf5e09f436760049f30b2621de6","releaseDate":"1969-01-17"},{"docType":"ALBUM","name":"Yellow Submarine (Remastered)","url":"https://i.scdn.co/image/b524e45ee12bc0562cd36169a895b9ec59fa702f","releaseDate":"1969-01-17"},{"docType":"ALBUM","name":"The Beatles (Remastered)","url":"https://i.scdn.co/image/d6028aea974c75961cb9cdc2263f5d8a8a6582bd","releaseDate":"1968-11-22"},{"docType":"ALBUM","name":"The Beatles (Remastered)","url":"https://i.scdn.co/image/2782d94528b449fb6910300cc8c8f93ab8cc7a8d","releaseDate":"1968-11-22"},{"docType":"ALBUM","name":"Magical Mystery Tour (Remastered)","url":"https://i.scdn.co/image/5779cc9a2ea0d1aa474a6e9575864d6d348acf97","releaseDate":"1967-11-27"},{"docType":"ALBUM","name":"Magical Mystery Tour (Remastered)","url":"https://i.scdn.co/image/5efcba83e06ce03ca843b459a4189f861ddc5f23","releaseDate":"1967-11-27"},{"docType":"ALBUM","name":"Sgt. Pepper's Lonely Hearts Club Band (Remastered)","url":"https://i.scdn.co/image/ec881187fe0432c8f6d208b9b4833bd411471345","releaseDate":"1967-06-01"},{"docType":"ALBUM","name":"Sgt. Pepper's Lonely Hearts Club Band (Remastered)","url":"https://i.scdn.co/image/377d0c66cae914111f5ee721853dc68d2cc53556","releaseDate":"1967-06-01"},{"docType":"ALBUM","name":"Revolver (Remastered)","url":"https://i.scdn.co/image/6ed84deed3993bbdfb644f91cb9db2a85b25da38","releaseDate":"1966-08-05"},{"docType":"ALBUM","name":"Revolver (Remastered)","url":"https://i.scdn.co/image/75ef0990aa0bb02ef7f6a52d41cc2c4c8028c3ba","releaseDate":"1966-08-05"},{"docType":"ALBUM","name":"Rubber Soul (Remastered)","url":"https://i.scdn.co/image/e26910fd9e7bb1671213cb9ed06a855077ddd79f","releaseDate":"1965-12-03"}]
        };

        return response.albums;
    }

    getAlbum(albumId) {
        const response = {
            tracks: [{"disc_number":1,"name":"Twist And Shout - Live / Remastered","duration_ms":1,"track_number":1,"docType":"TRACK"},{"disc_number":1,"name":"She's A Woman - Live / Remastered","duration_ms":1,"track_number":2,"docType":"TRACK"},{"disc_number":1,"name":"Dizzy Miss Lizzy - Live / Remastered","duration_ms":1,"track_number":3,"docType":"TRACK"},{"disc_number":1,"name":"Ticket To Ride - Live / Remastered","duration_ms":1,"track_number":4,"docType":"TRACK"},{"disc_number":1,"name":"Can't Buy Me Love - Live / Remastered","duration_ms":1,"track_number":5,"docType":"TRACK"},{"disc_number":1,"name":"Things We Said Today - Live / Remastered","duration_ms":1,"track_number":6,"docType":"TRACK"},{"disc_number":1,"name":"Roll Over Beethoven - Live / Remastered","duration_ms":1,"track_number":7,"docType":"TRACK"},{"disc_number":1,"name":"Boys - Live / Remastered","duration_ms":1,"track_number":8,"docType":"TRACK"},{"disc_number":1,"name":"A Hard Day's Night - Live / Remastered","duration_ms":1,"track_number":9,"docType":"TRACK"},{"disc_number":1,"name":"Help! - Live / Remastered","duration_ms":1,"track_number":10,"docType":"TRACK"},{"disc_number":1,"name":"All My Loving - Live / Remastered","duration_ms":1,"track_number":11,"docType":"TRACK"},{"disc_number":1,"name":"She Loves You - Live / Remastered","duration_ms":1,"track_number":12,"docType":"TRACK"},{"disc_number":1,"name":"Long Tall Sally - Live / Remastered","duration_ms":1,"track_number":13,"docType":"TRACK"},{"disc_number":1,"name":"You Can't Do That - Live / Bonus Track","duration_ms":1,"track_number":14,"docType":"TRACK"},{"disc_number":1,"name":"I Want To Hold Your Hand - Live / Bonus Track","duration_ms":1,"track_number":15,"docType":"TRACK"},{"disc_number":1,"name":"Everybody’s Trying To Be My Baby - Live / Bonus Track","duration_ms":1,"track_number":16,"docType":"TRACK"},{"disc_number":1,"name":"Baby's In Black - Live / Bonus Track","duration_ms":1,"track_number":17,"docType":"TRACK"}]
        };

        return response.tracks;
    }

    // getTrack(trackId) {
    //     const response = {
    //         tracks: [{"disc_number":1,"name":"Twist And Shout - Live / Remastered","duration_ms":1,"track_number":1,"docType":"TRACK"},{"disc_number":1,"name":"She's A Woman - Live / Remastered","duration_ms":1,"track_number":2,"docType":"TRACK"},{"disc_number":1,"name":"Dizzy Miss Lizzy - Live / Remastered","duration_ms":1,"track_number":3,"docType":"TRACK"},{"disc_number":1,"name":"Ticket To Ride - Live / Remastered","duration_ms":1,"track_number":4,"docType":"TRACK"},{"disc_number":1,"name":"Can't Buy Me Love - Live / Remastered","duration_ms":1,"track_number":5,"docType":"TRACK"},{"disc_number":1,"name":"Things We Said Today - Live / Remastered","duration_ms":1,"track_number":6,"docType":"TRACK"},{"disc_number":1,"name":"Roll Over Beethoven - Live / Remastered","duration_ms":1,"track_number":7,"docType":"TRACK"},{"disc_number":1,"name":"Boys - Live / Remastered","duration_ms":1,"track_number":8,"docType":"TRACK"},{"disc_number":1,"name":"A Hard Day's Night - Live / Remastered","duration_ms":1,"track_number":9,"docType":"TRACK"},{"disc_number":1,"name":"Help! - Live / Remastered","duration_ms":1,"track_number":10,"docType":"TRACK"},{"disc_number":1,"name":"All My Loving - Live / Remastered","duration_ms":1,"track_number":11,"docType":"TRACK"},{"disc_number":1,"name":"She Loves You - Live / Remastered","duration_ms":1,"track_number":12,"docType":"TRACK"},{"disc_number":1,"name":"Long Tall Sally - Live / Remastered","duration_ms":1,"track_number":13,"docType":"TRACK"},{"disc_number":1,"name":"You Can't Do That - Live / Bonus Track","duration_ms":1,"track_number":14,"docType":"TRACK"},{"disc_number":1,"name":"I Want To Hold Your Hand - Live / Bonus Track","duration_ms":1,"track_number":15,"docType":"TRACK"},{"disc_number":1,"name":"Everybody’s Trying To Be My Baby - Live / Bonus Track","duration_ms":1,"track_number":16,"docType":"TRACK"},{"disc_number":1,"name":"Baby's In Black - Live / Bonus Track","duration_ms":1,"track_number":17,"docType":"TRACK"}]
    //     };
    //
    //     return response.tracks;
    // }

    // getCommentsForTrack(trackId)

    // postCommentForTrack(postData)

}
