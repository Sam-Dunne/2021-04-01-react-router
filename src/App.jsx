import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import Home from './views/Home';
import People from './views/People';
import AboutPeople from './views/AboutPeople';
import Films from './views/Films';
import AboutFilm from './views/AboutFilm';
import Locations from './views/Locations';
import AboutLocation from './views/AboutLocation';
import Vehicles from './views/Vehicles';
import AboutVehicle from './views/AboutVehicle';



const App = () => (
    <BrowserRouter>
        <div id="app-wrapper" className="container-fluid">
            {/* NavSection */}
            <nav className="navbar navbar-expand-lg nav-bar-light justify-content-around p-3">     
                    <NavLink
                        to="/home"
                        className="col-sm-2 col-md-2 btn-sm btn btn-primary mt-2"
                        activeClassName="btn btn-secondary col-sm-2 col-md-2 btn btn-secondary shadow mt-2 py-2">
                        About
                        </NavLink>
                    <NavLink
                        to="/people"
                        className="col-sm-2 col-md-2 btn-sm btn btn-primary mt-2 "
                        activeClassName="btn btn-secondary col-sm-2 col-md-2 btn btn-secondary shadow mt-2 py-2">
                        People
                        </NavLink>
                    <NavLink
                        to="/films"
                        className="col-sm-2 col-md-2 btn-sm btn btn-primary mt-2 "
                        activeClassName="btn btn-secondary col-sm-2 col-md-2 btn btn-secondary shadow mt-2 py-2">
                        Films
                        </NavLink>
                    <NavLink
                        to="/locations"
                        className="col-sm-2 col-md-2 btn-sm btn btn-primary mt-2 " 
                        activeClassName="btn btn-secondary col-sm-2 col-md-2 btn btn-secondary shadow mt-2 py-2">
                        Locations
                        </NavLink>
                    <NavLink
                        to="/vehicles"
                        className="col-sm-2 col-md-2 btn-sm btn btn-primary mt-2"
                        activeClassName="btn btn-secondary col-sm-2 col-md-2 btn btn-secondary shadow mt-2 py-2">
                        Vehicles
                     </NavLink>             
            </nav>
            {/* Ghibli Logo */}
            <div className="row d-flex justify-content-center shadow">
                    <img className="my-2 col-sm-5 col-md-4 col-lg-4 col-xl-3"
                        src="https://filmschoolrejects.com/wp-content/uploads/2015/06/studio-ghibli-logo-1280x720.jpg"
                        alt="studio ghibli logo" />
            </div>

            <div className="container-fluid">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/home">
                        <Home />
                    </Route>

                    <Route exact path="/people">
                        <People />
                    </Route>
                    <Route exact path="/people/:id/aboutperson">
                        <AboutPeople />
                    </Route>

                    <Route exact path="/films">
                        <Films />
                    </Route>
                    <Route exact path="/films/:id/aboutfilm">
                        <AboutFilm />
                    </Route>

                    <Route exact path="/locations">
                        <Locations />
                    </Route>
                    <Route exact path="/locations/:id/aboutlocation">
                        <AboutLocation />
                    </Route>

                    <Route exact path="/vehicles">
                        <Vehicles />
                    </Route>
                    <Route exact path="/vehicles/:id/aboutvehicle">
                        <AboutVehicle />
                    </Route>

                </Switch>
            </div>
        </div>
    </BrowserRouter>
)



export default App;