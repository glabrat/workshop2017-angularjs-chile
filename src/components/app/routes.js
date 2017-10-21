import 'angular-route';

export function routes($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        rewriteLinks: true,
    });

    $routeProvider
        .otherwise('/')
        .when('/', {
            templateUrl: '/components/app/views/index.html',
             resolve: {
               data: ApiService => ApiService.getBands()
             },
        })
        .when('/band/:bandId/', {
            templateUrl: '/components/app/views/band-detail.html',
            resolve: {
              artists: ($route, ApiService) =>
                  ApiService.getArtists($route.current.params.bandId),
              albums: ($route, ApiService) =>//Implement API call to get albums
                  ApiService.getAlbums($route.current.params.bandId)
            },
        })
        .when('/band/:bandId/ALBUM/:albumId/', {
            templateUrl: '/components/app/views/band-detail.html',
            resolve: {
              // artists, albums and tracks requests in here
                artists: ($route, ApiService) =>
                    ApiService.getArtists($route.current.params.bandId),
                tracks: ($route, ApiService) =>
                    ApiService.getAlbum($route.current.params.bandId),
            },
        })
        .when('/band/:bandId/album/:albumId/track/:trackId/', {
            templateUrl: '/components/app/views/band-detail.html',
            // resolve: {
            //     artists, albums, tracks and comments requests in here
            // },
        });
}
