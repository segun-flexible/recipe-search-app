import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./services/font";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Header from "./components/header";

import SearchList from "./components/searchList";
import NotSearch from "./components/notSearch";
import Loading from "./components/loading";
import Error from "./components/Error";
import Paginate from "./components/pagination";
import idGenerator from "./helpers/idGenerator";
import useLocalStorage from "./helpers/UseLocalStorage";
class App extends Component {
  state = {
    list: [],
    bookmark: [],

    error: "",
    searchValue: "",
    isLoading: false,
    noSearch: false,
    activePage: 1,
    postPerPage: 6,
  };
  componentDidMount() {
    this.setState({ noSearch: true });
    this.setState({ bookmark: useLocalStorage("bookmark") });
  }
  componentDidUpdate() {
    useLocalStorage("bookmark", this.state.bookmark);
  }
  handleSearch = async (event) => {
    event.preventDefault();
    this.props.history.push("/");
    const searchInput = event.target.firstElementChild.value;
    this.setState({
      searchValue: searchInput,
      isLoading: true,
      list: [],
      noSearch: false,
    });

    try {
      const data = await axios.get(
        `https://api.edamam.com/search?q=${searchInput}&app_id=ba658bc5&app_key=978e9704c0fff9be0164b28cef1d1ea3&from=0&to=40`
      );
      let arr = [];
      const result = await data.data.hits.forEach((recipe) => {
        console.log(recipe);
        arr = [
          ...arr,
          {
            id: idGenerator(),
            image: recipe.recipe.image,
            title: recipe.recipe.label,
            author: recipe.recipe.source,
            ingredients: recipe.recipe.ingredients,
            url: recipe.recipe.url,
          },
        ];
      });

      this.setState({ list: arr, isLoading: false });
    } catch (error) {
      this.setState({ isLoading: false });
      this.setState({ error: error.message });
    }
  };
  handleAddToFavourite = (rp) => {
    if (!this.state.bookmark.length) {
      this.setState({ bookmark: [...this.state.bookmark, rp] });
    } else {
      const alreadyAdded = this.state.bookmark.findIndex(
        (p) => p.title === rp.title && p.image === rp.image
      );
      if (alreadyAdded === -1) {
        this.setState({ bookmark: [...this.state.bookmark, rp] });
        return;
      }
      //If Already Added To List Is True
      this.setState({
        bookmark: this.state.bookmark.filter(
          (p) => p.title !== rp.title && p.image !== rp.image
        ),
      });
    }
  };

  //handle The Page COntrl
  handlePageControl = (newPage) => {
    this.setState({ activePage: newPage });
  };

  render() {
    let start = (this.state.activePage - 1) * this.state.postPerPage;

    let end = start + this.state.postPerPage;
    return (
      <>
        <div className="container-fluid">
          <Header
            bookmark={this.state.bookmark}
            onSearch={this.handleSearch}
            hide={this.state.list}
          />

          <div className="container">
            {this.state.isLoading && <Loading />}
            {this.state.error && <Error message={this.state.error} />}
            {this.state.list.length > 0 ? (
              <SearchList
                handleAddToFavourite={this.handleAddToFavourite}
                recipes={this.state.list.slice(start, end)}
                bookmark={this.state.bookmark}
                searchValue={this.state.searchValue}
              />
            ) : (
              ""
            )}

            {this.state.list.length > 0 ? (
              <Paginate
                activePage={this.state.activePage}
                postPerPage={this.state.postPerPage}
                list={this.state.list.length}
                handlePageControl={this.handlePageControl}
              />
            ) : (
              ""
            )}

            {this.state.noSearch ? (
              <NotSearch onSearch={this.handleSearch} />
            ) : (
              ""
            )}
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(App);
