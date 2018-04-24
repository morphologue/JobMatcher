import * as $ from 'jquery';
import * as React from 'react';
import * as ReactDOM from 'react-dom'; 
import { Dashboard } from './Script/Component/Dashboard';
import { Job } from './Script/Model/Job';
import { Candidate } from './Script/Model/Candidate';

// Make Webpack pull in Bootstrap's CSS
declare let require: any;
require('bootstrap/dist/css/bootstrap.css');

// Globally install ES6 polyfills for (for IE11)
import 'core-js/shim';

// Globally install jQuery (for Bootstrap)
(window as any)['$'] = $;

// Let React do the rest.
$(() =>
{
    ReactDOM.render(React.createElement(Dashboard, {
        jobs: JSON.parse($('#jobs-json').text()) as Job[],
        candidates: JSON.parse($('#candidates-json').text()) as Candidate[]
    }), $('#react-root')[0]);
});
