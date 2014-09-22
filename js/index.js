/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var gaPlugin;
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        gaPlugin = window.plugins.gaPlugin;
        gaPlugin.init(function(){}, function(){}, "UA-55024156-1", 1);
        gaPlugin.trackEvent( function(){}, function(){}, "Button", "Click", "event only", 1);
        gaPlugin.trackEvent( function(){}, function(){}, "Button", "Click", "event only", 1);
        gaPlugin.trackEvent( function(){}, function(){}, "Button", "Click", "event only", 1);
        gaPlugin.trackEvent( function(){}, function(){}, "Button", "Click", "event only", 1);
//        OAuth.initialize('5Pl1ehruRjaz4Er7W5u05qyLlvA');
//        OAuth.popup('tumblr').done(function(result) {
           
        	
//        	var totalLikes = 0;
//        	result.get('/v2/user/likes')
//            .done(function (response) {
//            	totalLikes = response.response.liked_count;
//            	alert(totalLikes);
//            	
//            	$('#result').html("");
//            	
//            	var limit = 20;
//            	var offset = 0;
//            	alert('dsdf' + (limit + offset < totalLikes));
//            	while (limit + offset < totalLikes) {
//            		result.get('/v2/user/likes?offset='+offset)
//                    .done(function (response) {
//                        //this will display "John Doe" in the console
//                    	var posts = response.response.liked_posts;
//                    	var imgs = [];
//                    	for (var int = 0; int < posts.length; int++) {				
//        					imgs.push(posts[int].photos[0].original_size.url);
//        				}
//                        $('#result').append(" " + JSON.stringify(imgs));
//                        //alert(JSON.stringify(imgs));
//                    })
//                    .fail(function (err) {
//                        alert('error');
//                    });
//            		offset += limit;
//    			}
//            	
//            	
//            	
//            })
//            .fail(function (err) {
//                alert('error');
//            });
        	
        	
        	
        	
// }
//    );
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
