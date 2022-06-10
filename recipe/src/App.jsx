// import logo from './logo.svg';
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <nav className="navbar navbar-light bg-light user_nav">
          <div className="container-fluid">
            <div className="logo_container">
              <img
                className="logo_image"
                src="https://freesvg.org/img/Gerald_G_Fast_Food_Lunch_Dinner_(FF_Menu)_6.png"
                alt=""
              />
              <p>Recipe Search</p>
            </div>

            <input
              className="form-control input_user"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />

            <button className="btn btn-primary">filter</button>
          </div>
        </nav>
      </div>
      <div className="food_container_user">
        <div className="card card_user">
          <img
            src="https://edamam-product-images.s3.amazonaws.com/web-img/72e/72ebeef4f13b029165ce5fc4a675130e.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLWVhc3QtMSJHMEUCIAp76RBJb3%2FGqQ2EqxGtCiZLJnM%2FaAElEsMYJzW%2FSpI%2FAiEAivb7i9wjsGCz%2BQfPLaC%2F%2F609Yu43Vrhy87x%2FVa%2BlxFsq0gQILRAAGgwxODcwMTcxNTA5ODYiDICJtuToDe2Zp1PfciqvBAyz3bEw5sg4CFEzO0cdPIQyI2Y6p9giVxLrF5UueLXxFaKCeEbfHwfaQ%2Fzuhl0FdvVg6guH6UCHZra9ncs43mJX4r8fgQURhNLYKh3SoRzupXzqjAsp5ujC5vFzVxP%2BJBKS3zvyhzhgT%2Fvq3ZWZgUl8xfp86Yv07rkf6qrBzVz4JmSmHL9mwZrGSyTd6l6GLAO9ISmmdlRHqZwJs323F9TCr3udsMEPljrEGvw2SqtIpgpJAYmc6%2F8m3eX6SicsjG1bIbVjonu1T74W4eBqEFwxp55VIyZrAqybvHrsfMsJYNIf02IXU4IE87aCGXswgwm5r9D9JoVoT9EY8c1s9qz5a2qydT1YmxddXQqclgtIkAlRwF8WIP4MkzwIoxfU0syFdCc5JikEttEU7bzqUjYdSG67dyc%2FtdXZ2fpHATlVRHvAJE8tYVajCGa5L0fMQ301%2BqXxEEblvNWkla%2Bs1yFVLQ1Al5hcdzBahpLN9eMTlStt2tI5M4D2garQoYjsfETUqfyEJf7X9dYUVosWMqxpIQjbcuCzw%2BXazIXg98tuUotInFmL6wwaGKG%2FqhlNu1zpo8Z50XVFI6M3EtZD0WBaxuxc8slose1XY1LzshB4u6MRdNM1dR6CM8Au24hLwfBI3QqdcaFH2w7P64v%2B%2BHD2ci5uEKynjNkU3qLcgJtokbVD4mhc8uk4rfFA5b%2B8T9pX8jfDO9ijNRvD87%2Fjj6tMAMTg1dzVnvY68UNttOMwx%2BqMlQY6qQGjGCPiHs66PLnaBpjkX%2FvOW370xi8lhs5xjyMxKel8%2FwIhgSPY5xe%2B3ZTw%2B3tvgou5q4EBn%2FCe9TuoOhUSAKhskfPRz6KMRmWWudeavtaDOIw0dMquvFlTvDbFkjY1X1fA54T5xB%2FiZKny1pCKu8aTZtq0SRiKiYDEvpJlErNBwmX6irrALUYwCQKNHWmSG2L9DG3GGWpqliFdQkCfmOS3DPyAv2jv9N7H&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220610T131412Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFANBTJK4H%2F20220610%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ffdda6b99ba55ddf44cce4fb9cbd564b0830a967be16a4aef7c9f493e1e64639"
            className="card-img-top user_image"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>

            <div className="card-text detail_user">
              <p>
                <span>0 calori</span>
                <span> | </span>

                <span>0 calori</span>
              </p>
            </div>
          </div>
        </div>
        <div className="card card_user">
          <img
            src="https://edamam-product-images.s3.amazonaws.com/web-img/72e/72ebeef4f13b029165ce5fc4a675130e.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLWVhc3QtMSJHMEUCIAp76RBJb3%2FGqQ2EqxGtCiZLJnM%2FaAElEsMYJzW%2FSpI%2FAiEAivb7i9wjsGCz%2BQfPLaC%2F%2F609Yu43Vrhy87x%2FVa%2BlxFsq0gQILRAAGgwxODcwMTcxNTA5ODYiDICJtuToDe2Zp1PfciqvBAyz3bEw5sg4CFEzO0cdPIQyI2Y6p9giVxLrF5UueLXxFaKCeEbfHwfaQ%2Fzuhl0FdvVg6guH6UCHZra9ncs43mJX4r8fgQURhNLYKh3SoRzupXzqjAsp5ujC5vFzVxP%2BJBKS3zvyhzhgT%2Fvq3ZWZgUl8xfp86Yv07rkf6qrBzVz4JmSmHL9mwZrGSyTd6l6GLAO9ISmmdlRHqZwJs323F9TCr3udsMEPljrEGvw2SqtIpgpJAYmc6%2F8m3eX6SicsjG1bIbVjonu1T74W4eBqEFwxp55VIyZrAqybvHrsfMsJYNIf02IXU4IE87aCGXswgwm5r9D9JoVoT9EY8c1s9qz5a2qydT1YmxddXQqclgtIkAlRwF8WIP4MkzwIoxfU0syFdCc5JikEttEU7bzqUjYdSG67dyc%2FtdXZ2fpHATlVRHvAJE8tYVajCGa5L0fMQ301%2BqXxEEblvNWkla%2Bs1yFVLQ1Al5hcdzBahpLN9eMTlStt2tI5M4D2garQoYjsfETUqfyEJf7X9dYUVosWMqxpIQjbcuCzw%2BXazIXg98tuUotInFmL6wwaGKG%2FqhlNu1zpo8Z50XVFI6M3EtZD0WBaxuxc8slose1XY1LzshB4u6MRdNM1dR6CM8Au24hLwfBI3QqdcaFH2w7P64v%2B%2BHD2ci5uEKynjNkU3qLcgJtokbVD4mhc8uk4rfFA5b%2B8T9pX8jfDO9ijNRvD87%2Fjj6tMAMTg1dzVnvY68UNttOMwx%2BqMlQY6qQGjGCPiHs66PLnaBpjkX%2FvOW370xi8lhs5xjyMxKel8%2FwIhgSPY5xe%2B3ZTw%2B3tvgou5q4EBn%2FCe9TuoOhUSAKhskfPRz6KMRmWWudeavtaDOIw0dMquvFlTvDbFkjY1X1fA54T5xB%2FiZKny1pCKu8aTZtq0SRiKiYDEvpJlErNBwmX6irrALUYwCQKNHWmSG2L9DG3GGWpqliFdQkCfmOS3DPyAv2jv9N7H&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220610T131412Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFANBTJK4H%2F20220610%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ffdda6b99ba55ddf44cce4fb9cbd564b0830a967be16a4aef7c9f493e1e64639"
            className="card-img-top user_image"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>

            <div className="card-text detail_user">
              <p>
                <span>0 calori</span>
                <span> | </span>

                <span>0 calori</span>
              </p>
            </div>
          </div>
        </div>
        <div className="card card_user">
          <img
            src="https://edamam-product-images.s3.amazonaws.com/web-img/72e/72ebeef4f13b029165ce5fc4a675130e.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLWVhc3QtMSJHMEUCIAp76RBJb3%2FGqQ2EqxGtCiZLJnM%2FaAElEsMYJzW%2FSpI%2FAiEAivb7i9wjsGCz%2BQfPLaC%2F%2F609Yu43Vrhy87x%2FVa%2BlxFsq0gQILRAAGgwxODcwMTcxNTA5ODYiDICJtuToDe2Zp1PfciqvBAyz3bEw5sg4CFEzO0cdPIQyI2Y6p9giVxLrF5UueLXxFaKCeEbfHwfaQ%2Fzuhl0FdvVg6guH6UCHZra9ncs43mJX4r8fgQURhNLYKh3SoRzupXzqjAsp5ujC5vFzVxP%2BJBKS3zvyhzhgT%2Fvq3ZWZgUl8xfp86Yv07rkf6qrBzVz4JmSmHL9mwZrGSyTd6l6GLAO9ISmmdlRHqZwJs323F9TCr3udsMEPljrEGvw2SqtIpgpJAYmc6%2F8m3eX6SicsjG1bIbVjonu1T74W4eBqEFwxp55VIyZrAqybvHrsfMsJYNIf02IXU4IE87aCGXswgwm5r9D9JoVoT9EY8c1s9qz5a2qydT1YmxddXQqclgtIkAlRwF8WIP4MkzwIoxfU0syFdCc5JikEttEU7bzqUjYdSG67dyc%2FtdXZ2fpHATlVRHvAJE8tYVajCGa5L0fMQ301%2BqXxEEblvNWkla%2Bs1yFVLQ1Al5hcdzBahpLN9eMTlStt2tI5M4D2garQoYjsfETUqfyEJf7X9dYUVosWMqxpIQjbcuCzw%2BXazIXg98tuUotInFmL6wwaGKG%2FqhlNu1zpo8Z50XVFI6M3EtZD0WBaxuxc8slose1XY1LzshB4u6MRdNM1dR6CM8Au24hLwfBI3QqdcaFH2w7P64v%2B%2BHD2ci5uEKynjNkU3qLcgJtokbVD4mhc8uk4rfFA5b%2B8T9pX8jfDO9ijNRvD87%2Fjj6tMAMTg1dzVnvY68UNttOMwx%2BqMlQY6qQGjGCPiHs66PLnaBpjkX%2FvOW370xi8lhs5xjyMxKel8%2FwIhgSPY5xe%2B3ZTw%2B3tvgou5q4EBn%2FCe9TuoOhUSAKhskfPRz6KMRmWWudeavtaDOIw0dMquvFlTvDbFkjY1X1fA54T5xB%2FiZKny1pCKu8aTZtq0SRiKiYDEvpJlErNBwmX6irrALUYwCQKNHWmSG2L9DG3GGWpqliFdQkCfmOS3DPyAv2jv9N7H&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220610T131412Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFANBTJK4H%2F20220610%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ffdda6b99ba55ddf44cce4fb9cbd564b0830a967be16a4aef7c9f493e1e64639"
            className="card-img-top user_image"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>

            <div className="card-text detail_user">
              <p>
                <span>0 calori</span>
                <span> | </span>

                <span>0 calori</span>
              </p>
            </div>
          </div>
        </div>
        <div className="card card_user">
          <img
            src="https://edamam-product-images.s3.amazonaws.com/web-img/72e/72ebeef4f13b029165ce5fc4a675130e.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLWVhc3QtMSJHMEUCIAp76RBJb3%2FGqQ2EqxGtCiZLJnM%2FaAElEsMYJzW%2FSpI%2FAiEAivb7i9wjsGCz%2BQfPLaC%2F%2F609Yu43Vrhy87x%2FVa%2BlxFsq0gQILRAAGgwxODcwMTcxNTA5ODYiDICJtuToDe2Zp1PfciqvBAyz3bEw5sg4CFEzO0cdPIQyI2Y6p9giVxLrF5UueLXxFaKCeEbfHwfaQ%2Fzuhl0FdvVg6guH6UCHZra9ncs43mJX4r8fgQURhNLYKh3SoRzupXzqjAsp5ujC5vFzVxP%2BJBKS3zvyhzhgT%2Fvq3ZWZgUl8xfp86Yv07rkf6qrBzVz4JmSmHL9mwZrGSyTd6l6GLAO9ISmmdlRHqZwJs323F9TCr3udsMEPljrEGvw2SqtIpgpJAYmc6%2F8m3eX6SicsjG1bIbVjonu1T74W4eBqEFwxp55VIyZrAqybvHrsfMsJYNIf02IXU4IE87aCGXswgwm5r9D9JoVoT9EY8c1s9qz5a2qydT1YmxddXQqclgtIkAlRwF8WIP4MkzwIoxfU0syFdCc5JikEttEU7bzqUjYdSG67dyc%2FtdXZ2fpHATlVRHvAJE8tYVajCGa5L0fMQ301%2BqXxEEblvNWkla%2Bs1yFVLQ1Al5hcdzBahpLN9eMTlStt2tI5M4D2garQoYjsfETUqfyEJf7X9dYUVosWMqxpIQjbcuCzw%2BXazIXg98tuUotInFmL6wwaGKG%2FqhlNu1zpo8Z50XVFI6M3EtZD0WBaxuxc8slose1XY1LzshB4u6MRdNM1dR6CM8Au24hLwfBI3QqdcaFH2w7P64v%2B%2BHD2ci5uEKynjNkU3qLcgJtokbVD4mhc8uk4rfFA5b%2B8T9pX8jfDO9ijNRvD87%2Fjj6tMAMTg1dzVnvY68UNttOMwx%2BqMlQY6qQGjGCPiHs66PLnaBpjkX%2FvOW370xi8lhs5xjyMxKel8%2FwIhgSPY5xe%2B3ZTw%2B3tvgou5q4EBn%2FCe9TuoOhUSAKhskfPRz6KMRmWWudeavtaDOIw0dMquvFlTvDbFkjY1X1fA54T5xB%2FiZKny1pCKu8aTZtq0SRiKiYDEvpJlErNBwmX6irrALUYwCQKNHWmSG2L9DG3GGWpqliFdQkCfmOS3DPyAv2jv9N7H&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220610T131412Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFANBTJK4H%2F20220610%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ffdda6b99ba55ddf44cce4fb9cbd564b0830a967be16a4aef7c9f493e1e64639"
            className="card-img-top user_image"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>

            <div className="card-text detail_user">
              <p>
                <span>0 calori</span>
                <span> | </span>

                <span>0 calori</span>
              </p>
            </div>
          </div>
        </div>
        <div className="card card_user">
          <img
            src="https://edamam-product-images.s3.amazonaws.com/web-img/72e/72ebeef4f13b029165ce5fc4a675130e.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLWVhc3QtMSJHMEUCIAp76RBJb3%2FGqQ2EqxGtCiZLJnM%2FaAElEsMYJzW%2FSpI%2FAiEAivb7i9wjsGCz%2BQfPLaC%2F%2F609Yu43Vrhy87x%2FVa%2BlxFsq0gQILRAAGgwxODcwMTcxNTA5ODYiDICJtuToDe2Zp1PfciqvBAyz3bEw5sg4CFEzO0cdPIQyI2Y6p9giVxLrF5UueLXxFaKCeEbfHwfaQ%2Fzuhl0FdvVg6guH6UCHZra9ncs43mJX4r8fgQURhNLYKh3SoRzupXzqjAsp5ujC5vFzVxP%2BJBKS3zvyhzhgT%2Fvq3ZWZgUl8xfp86Yv07rkf6qrBzVz4JmSmHL9mwZrGSyTd6l6GLAO9ISmmdlRHqZwJs323F9TCr3udsMEPljrEGvw2SqtIpgpJAYmc6%2F8m3eX6SicsjG1bIbVjonu1T74W4eBqEFwxp55VIyZrAqybvHrsfMsJYNIf02IXU4IE87aCGXswgwm5r9D9JoVoT9EY8c1s9qz5a2qydT1YmxddXQqclgtIkAlRwF8WIP4MkzwIoxfU0syFdCc5JikEttEU7bzqUjYdSG67dyc%2FtdXZ2fpHATlVRHvAJE8tYVajCGa5L0fMQ301%2BqXxEEblvNWkla%2Bs1yFVLQ1Al5hcdzBahpLN9eMTlStt2tI5M4D2garQoYjsfETUqfyEJf7X9dYUVosWMqxpIQjbcuCzw%2BXazIXg98tuUotInFmL6wwaGKG%2FqhlNu1zpo8Z50XVFI6M3EtZD0WBaxuxc8slose1XY1LzshB4u6MRdNM1dR6CM8Au24hLwfBI3QqdcaFH2w7P64v%2B%2BHD2ci5uEKynjNkU3qLcgJtokbVD4mhc8uk4rfFA5b%2B8T9pX8jfDO9ijNRvD87%2Fjj6tMAMTg1dzVnvY68UNttOMwx%2BqMlQY6qQGjGCPiHs66PLnaBpjkX%2FvOW370xi8lhs5xjyMxKel8%2FwIhgSPY5xe%2B3ZTw%2B3tvgou5q4EBn%2FCe9TuoOhUSAKhskfPRz6KMRmWWudeavtaDOIw0dMquvFlTvDbFkjY1X1fA54T5xB%2FiZKny1pCKu8aTZtq0SRiKiYDEvpJlErNBwmX6irrALUYwCQKNHWmSG2L9DG3GGWpqliFdQkCfmOS3DPyAv2jv9N7H&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220610T131412Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFANBTJK4H%2F20220610%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ffdda6b99ba55ddf44cce4fb9cbd564b0830a967be16a4aef7c9f493e1e64639"
            className="card-img-top user_image"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>

            <div className="card-text detail_user">
              <p>
                <span>0 calori</span>
                <span> | </span>

                <span>0 calori</span>
              </p>
            </div>
          </div>
        </div>
        <div className="card card_user">
          <img
            src="https://edamam-product-images.s3.amazonaws.com/web-img/72e/72ebeef4f13b029165ce5fc4a675130e.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLWVhc3QtMSJHMEUCIAp76RBJb3%2FGqQ2EqxGtCiZLJnM%2FaAElEsMYJzW%2FSpI%2FAiEAivb7i9wjsGCz%2BQfPLaC%2F%2F609Yu43Vrhy87x%2FVa%2BlxFsq0gQILRAAGgwxODcwMTcxNTA5ODYiDICJtuToDe2Zp1PfciqvBAyz3bEw5sg4CFEzO0cdPIQyI2Y6p9giVxLrF5UueLXxFaKCeEbfHwfaQ%2Fzuhl0FdvVg6guH6UCHZra9ncs43mJX4r8fgQURhNLYKh3SoRzupXzqjAsp5ujC5vFzVxP%2BJBKS3zvyhzhgT%2Fvq3ZWZgUl8xfp86Yv07rkf6qrBzVz4JmSmHL9mwZrGSyTd6l6GLAO9ISmmdlRHqZwJs323F9TCr3udsMEPljrEGvw2SqtIpgpJAYmc6%2F8m3eX6SicsjG1bIbVjonu1T74W4eBqEFwxp55VIyZrAqybvHrsfMsJYNIf02IXU4IE87aCGXswgwm5r9D9JoVoT9EY8c1s9qz5a2qydT1YmxddXQqclgtIkAlRwF8WIP4MkzwIoxfU0syFdCc5JikEttEU7bzqUjYdSG67dyc%2FtdXZ2fpHATlVRHvAJE8tYVajCGa5L0fMQ301%2BqXxEEblvNWkla%2Bs1yFVLQ1Al5hcdzBahpLN9eMTlStt2tI5M4D2garQoYjsfETUqfyEJf7X9dYUVosWMqxpIQjbcuCzw%2BXazIXg98tuUotInFmL6wwaGKG%2FqhlNu1zpo8Z50XVFI6M3EtZD0WBaxuxc8slose1XY1LzshB4u6MRdNM1dR6CM8Au24hLwfBI3QqdcaFH2w7P64v%2B%2BHD2ci5uEKynjNkU3qLcgJtokbVD4mhc8uk4rfFA5b%2B8T9pX8jfDO9ijNRvD87%2Fjj6tMAMTg1dzVnvY68UNttOMwx%2BqMlQY6qQGjGCPiHs66PLnaBpjkX%2FvOW370xi8lhs5xjyMxKel8%2FwIhgSPY5xe%2B3ZTw%2B3tvgou5q4EBn%2FCe9TuoOhUSAKhskfPRz6KMRmWWudeavtaDOIw0dMquvFlTvDbFkjY1X1fA54T5xB%2FiZKny1pCKu8aTZtq0SRiKiYDEvpJlErNBwmX6irrALUYwCQKNHWmSG2L9DG3GGWpqliFdQkCfmOS3DPyAv2jv9N7H&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220610T131412Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFANBTJK4H%2F20220610%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ffdda6b99ba55ddf44cce4fb9cbd564b0830a967be16a4aef7c9f493e1e64639"
            className="card-img-top user_image"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>

            <div className="card-text detail_user">
              <p>
                <span>0 calori</span>
                <span> | </span>

                <span>0 calori</span>
              </p>
            </div>
          </div>
        </div>
        <div className="card card_user">
          <img
            src="https://edamam-product-images.s3.amazonaws.com/web-img/72e/72ebeef4f13b029165ce5fc4a675130e.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLWVhc3QtMSJHMEUCIAp76RBJb3%2FGqQ2EqxGtCiZLJnM%2FaAElEsMYJzW%2FSpI%2FAiEAivb7i9wjsGCz%2BQfPLaC%2F%2F609Yu43Vrhy87x%2FVa%2BlxFsq0gQILRAAGgwxODcwMTcxNTA5ODYiDICJtuToDe2Zp1PfciqvBAyz3bEw5sg4CFEzO0cdPIQyI2Y6p9giVxLrF5UueLXxFaKCeEbfHwfaQ%2Fzuhl0FdvVg6guH6UCHZra9ncs43mJX4r8fgQURhNLYKh3SoRzupXzqjAsp5ujC5vFzVxP%2BJBKS3zvyhzhgT%2Fvq3ZWZgUl8xfp86Yv07rkf6qrBzVz4JmSmHL9mwZrGSyTd6l6GLAO9ISmmdlRHqZwJs323F9TCr3udsMEPljrEGvw2SqtIpgpJAYmc6%2F8m3eX6SicsjG1bIbVjonu1T74W4eBqEFwxp55VIyZrAqybvHrsfMsJYNIf02IXU4IE87aCGXswgwm5r9D9JoVoT9EY8c1s9qz5a2qydT1YmxddXQqclgtIkAlRwF8WIP4MkzwIoxfU0syFdCc5JikEttEU7bzqUjYdSG67dyc%2FtdXZ2fpHATlVRHvAJE8tYVajCGa5L0fMQ301%2BqXxEEblvNWkla%2Bs1yFVLQ1Al5hcdzBahpLN9eMTlStt2tI5M4D2garQoYjsfETUqfyEJf7X9dYUVosWMqxpIQjbcuCzw%2BXazIXg98tuUotInFmL6wwaGKG%2FqhlNu1zpo8Z50XVFI6M3EtZD0WBaxuxc8slose1XY1LzshB4u6MRdNM1dR6CM8Au24hLwfBI3QqdcaFH2w7P64v%2B%2BHD2ci5uEKynjNkU3qLcgJtokbVD4mhc8uk4rfFA5b%2B8T9pX8jfDO9ijNRvD87%2Fjj6tMAMTg1dzVnvY68UNttOMwx%2BqMlQY6qQGjGCPiHs66PLnaBpjkX%2FvOW370xi8lhs5xjyMxKel8%2FwIhgSPY5xe%2B3ZTw%2B3tvgou5q4EBn%2FCe9TuoOhUSAKhskfPRz6KMRmWWudeavtaDOIw0dMquvFlTvDbFkjY1X1fA54T5xB%2FiZKny1pCKu8aTZtq0SRiKiYDEvpJlErNBwmX6irrALUYwCQKNHWmSG2L9DG3GGWpqliFdQkCfmOS3DPyAv2jv9N7H&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220610T131412Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFANBTJK4H%2F20220610%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ffdda6b99ba55ddf44cce4fb9cbd564b0830a967be16a4aef7c9f493e1e64639"
            className="card-img-top user_image"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>

            <div className="card-text detail_user">
              <p>
                <span>0 calori</span>
                <span> | </span>

                <span>0 calori</span>
              </p>
            </div>
          </div>
        </div>
        <div className="card card_user">
          <img
            src="https://edamam-product-images.s3.amazonaws.com/web-img/72e/72ebeef4f13b029165ce5fc4a675130e.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLWVhc3QtMSJHMEUCIAp76RBJb3%2FGqQ2EqxGtCiZLJnM%2FaAElEsMYJzW%2FSpI%2FAiEAivb7i9wjsGCz%2BQfPLaC%2F%2F609Yu43Vrhy87x%2FVa%2BlxFsq0gQILRAAGgwxODcwMTcxNTA5ODYiDICJtuToDe2Zp1PfciqvBAyz3bEw5sg4CFEzO0cdPIQyI2Y6p9giVxLrF5UueLXxFaKCeEbfHwfaQ%2Fzuhl0FdvVg6guH6UCHZra9ncs43mJX4r8fgQURhNLYKh3SoRzupXzqjAsp5ujC5vFzVxP%2BJBKS3zvyhzhgT%2Fvq3ZWZgUl8xfp86Yv07rkf6qrBzVz4JmSmHL9mwZrGSyTd6l6GLAO9ISmmdlRHqZwJs323F9TCr3udsMEPljrEGvw2SqtIpgpJAYmc6%2F8m3eX6SicsjG1bIbVjonu1T74W4eBqEFwxp55VIyZrAqybvHrsfMsJYNIf02IXU4IE87aCGXswgwm5r9D9JoVoT9EY8c1s9qz5a2qydT1YmxddXQqclgtIkAlRwF8WIP4MkzwIoxfU0syFdCc5JikEttEU7bzqUjYdSG67dyc%2FtdXZ2fpHATlVRHvAJE8tYVajCGa5L0fMQ301%2BqXxEEblvNWkla%2Bs1yFVLQ1Al5hcdzBahpLN9eMTlStt2tI5M4D2garQoYjsfETUqfyEJf7X9dYUVosWMqxpIQjbcuCzw%2BXazIXg98tuUotInFmL6wwaGKG%2FqhlNu1zpo8Z50XVFI6M3EtZD0WBaxuxc8slose1XY1LzshB4u6MRdNM1dR6CM8Au24hLwfBI3QqdcaFH2w7P64v%2B%2BHD2ci5uEKynjNkU3qLcgJtokbVD4mhc8uk4rfFA5b%2B8T9pX8jfDO9ijNRvD87%2Fjj6tMAMTg1dzVnvY68UNttOMwx%2BqMlQY6qQGjGCPiHs66PLnaBpjkX%2FvOW370xi8lhs5xjyMxKel8%2FwIhgSPY5xe%2B3ZTw%2B3tvgou5q4EBn%2FCe9TuoOhUSAKhskfPRz6KMRmWWudeavtaDOIw0dMquvFlTvDbFkjY1X1fA54T5xB%2FiZKny1pCKu8aTZtq0SRiKiYDEvpJlErNBwmX6irrALUYwCQKNHWmSG2L9DG3GGWpqliFdQkCfmOS3DPyAv2jv9N7H&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220610T131412Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFANBTJK4H%2F20220610%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ffdda6b99ba55ddf44cce4fb9cbd564b0830a967be16a4aef7c9f493e1e64639"
            className="card-img-top user_image"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>

            <div className="card-text detail_user">
              <p>
                <span>0 calori</span>
                <span> | </span>

                <span>0 calori</span>
              </p>
            </div>
          </div>
        </div>
        <div className="card card_user">
          <img
            src="https://edamam-product-images.s3.amazonaws.com/web-img/72e/72ebeef4f13b029165ce5fc4a675130e.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLWVhc3QtMSJHMEUCIAp76RBJb3%2FGqQ2EqxGtCiZLJnM%2FaAElEsMYJzW%2FSpI%2FAiEAivb7i9wjsGCz%2BQfPLaC%2F%2F609Yu43Vrhy87x%2FVa%2BlxFsq0gQILRAAGgwxODcwMTcxNTA5ODYiDICJtuToDe2Zp1PfciqvBAyz3bEw5sg4CFEzO0cdPIQyI2Y6p9giVxLrF5UueLXxFaKCeEbfHwfaQ%2Fzuhl0FdvVg6guH6UCHZra9ncs43mJX4r8fgQURhNLYKh3SoRzupXzqjAsp5ujC5vFzVxP%2BJBKS3zvyhzhgT%2Fvq3ZWZgUl8xfp86Yv07rkf6qrBzVz4JmSmHL9mwZrGSyTd6l6GLAO9ISmmdlRHqZwJs323F9TCr3udsMEPljrEGvw2SqtIpgpJAYmc6%2F8m3eX6SicsjG1bIbVjonu1T74W4eBqEFwxp55VIyZrAqybvHrsfMsJYNIf02IXU4IE87aCGXswgwm5r9D9JoVoT9EY8c1s9qz5a2qydT1YmxddXQqclgtIkAlRwF8WIP4MkzwIoxfU0syFdCc5JikEttEU7bzqUjYdSG67dyc%2FtdXZ2fpHATlVRHvAJE8tYVajCGa5L0fMQ301%2BqXxEEblvNWkla%2Bs1yFVLQ1Al5hcdzBahpLN9eMTlStt2tI5M4D2garQoYjsfETUqfyEJf7X9dYUVosWMqxpIQjbcuCzw%2BXazIXg98tuUotInFmL6wwaGKG%2FqhlNu1zpo8Z50XVFI6M3EtZD0WBaxuxc8slose1XY1LzshB4u6MRdNM1dR6CM8Au24hLwfBI3QqdcaFH2w7P64v%2B%2BHD2ci5uEKynjNkU3qLcgJtokbVD4mhc8uk4rfFA5b%2B8T9pX8jfDO9ijNRvD87%2Fjj6tMAMTg1dzVnvY68UNttOMwx%2BqMlQY6qQGjGCPiHs66PLnaBpjkX%2FvOW370xi8lhs5xjyMxKel8%2FwIhgSPY5xe%2B3ZTw%2B3tvgou5q4EBn%2FCe9TuoOhUSAKhskfPRz6KMRmWWudeavtaDOIw0dMquvFlTvDbFkjY1X1fA54T5xB%2FiZKny1pCKu8aTZtq0SRiKiYDEvpJlErNBwmX6irrALUYwCQKNHWmSG2L9DG3GGWpqliFdQkCfmOS3DPyAv2jv9N7H&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220610T131412Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFANBTJK4H%2F20220610%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ffdda6b99ba55ddf44cce4fb9cbd564b0830a967be16a4aef7c9f493e1e64639"
            className="card-img-top user_image"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>

            <div className="card-text detail_user">
              <p>
                <span>0 calori</span>
                <span> | </span>

                <span>0 calori</span>
              </p>
            </div>
          </div>
        </div>
        <div className="card card_user">
          <img
            src="https://edamam-product-images.s3.amazonaws.com/web-img/72e/72ebeef4f13b029165ce5fc4a675130e.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLWVhc3QtMSJHMEUCIAp76RBJb3%2FGqQ2EqxGtCiZLJnM%2FaAElEsMYJzW%2FSpI%2FAiEAivb7i9wjsGCz%2BQfPLaC%2F%2F609Yu43Vrhy87x%2FVa%2BlxFsq0gQILRAAGgwxODcwMTcxNTA5ODYiDICJtuToDe2Zp1PfciqvBAyz3bEw5sg4CFEzO0cdPIQyI2Y6p9giVxLrF5UueLXxFaKCeEbfHwfaQ%2Fzuhl0FdvVg6guH6UCHZra9ncs43mJX4r8fgQURhNLYKh3SoRzupXzqjAsp5ujC5vFzVxP%2BJBKS3zvyhzhgT%2Fvq3ZWZgUl8xfp86Yv07rkf6qrBzVz4JmSmHL9mwZrGSyTd6l6GLAO9ISmmdlRHqZwJs323F9TCr3udsMEPljrEGvw2SqtIpgpJAYmc6%2F8m3eX6SicsjG1bIbVjonu1T74W4eBqEFwxp55VIyZrAqybvHrsfMsJYNIf02IXU4IE87aCGXswgwm5r9D9JoVoT9EY8c1s9qz5a2qydT1YmxddXQqclgtIkAlRwF8WIP4MkzwIoxfU0syFdCc5JikEttEU7bzqUjYdSG67dyc%2FtdXZ2fpHATlVRHvAJE8tYVajCGa5L0fMQ301%2BqXxEEblvNWkla%2Bs1yFVLQ1Al5hcdzBahpLN9eMTlStt2tI5M4D2garQoYjsfETUqfyEJf7X9dYUVosWMqxpIQjbcuCzw%2BXazIXg98tuUotInFmL6wwaGKG%2FqhlNu1zpo8Z50XVFI6M3EtZD0WBaxuxc8slose1XY1LzshB4u6MRdNM1dR6CM8Au24hLwfBI3QqdcaFH2w7P64v%2B%2BHD2ci5uEKynjNkU3qLcgJtokbVD4mhc8uk4rfFA5b%2B8T9pX8jfDO9ijNRvD87%2Fjj6tMAMTg1dzVnvY68UNttOMwx%2BqMlQY6qQGjGCPiHs66PLnaBpjkX%2FvOW370xi8lhs5xjyMxKel8%2FwIhgSPY5xe%2B3ZTw%2B3tvgou5q4EBn%2FCe9TuoOhUSAKhskfPRz6KMRmWWudeavtaDOIw0dMquvFlTvDbFkjY1X1fA54T5xB%2FiZKny1pCKu8aTZtq0SRiKiYDEvpJlErNBwmX6irrALUYwCQKNHWmSG2L9DG3GGWpqliFdQkCfmOS3DPyAv2jv9N7H&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220610T131412Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFANBTJK4H%2F20220610%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ffdda6b99ba55ddf44cce4fb9cbd564b0830a967be16a4aef7c9f493e1e64639"
            className="card-img-top user_image"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>

            <div className="card-text detail_user">
              <p>
                <span>0 calori</span>
                <span> | </span>

                <span>0 calori</span>
              </p>
            </div>
          </div>
        </div>
        <div className="card card_user">
          <img
            src="https://edamam-product-images.s3.amazonaws.com/web-img/72e/72ebeef4f13b029165ce5fc4a675130e.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLWVhc3QtMSJHMEUCIAp76RBJb3%2FGqQ2EqxGtCiZLJnM%2FaAElEsMYJzW%2FSpI%2FAiEAivb7i9wjsGCz%2BQfPLaC%2F%2F609Yu43Vrhy87x%2FVa%2BlxFsq0gQILRAAGgwxODcwMTcxNTA5ODYiDICJtuToDe2Zp1PfciqvBAyz3bEw5sg4CFEzO0cdPIQyI2Y6p9giVxLrF5UueLXxFaKCeEbfHwfaQ%2Fzuhl0FdvVg6guH6UCHZra9ncs43mJX4r8fgQURhNLYKh3SoRzupXzqjAsp5ujC5vFzVxP%2BJBKS3zvyhzhgT%2Fvq3ZWZgUl8xfp86Yv07rkf6qrBzVz4JmSmHL9mwZrGSyTd6l6GLAO9ISmmdlRHqZwJs323F9TCr3udsMEPljrEGvw2SqtIpgpJAYmc6%2F8m3eX6SicsjG1bIbVjonu1T74W4eBqEFwxp55VIyZrAqybvHrsfMsJYNIf02IXU4IE87aCGXswgwm5r9D9JoVoT9EY8c1s9qz5a2qydT1YmxddXQqclgtIkAlRwF8WIP4MkzwIoxfU0syFdCc5JikEttEU7bzqUjYdSG67dyc%2FtdXZ2fpHATlVRHvAJE8tYVajCGa5L0fMQ301%2BqXxEEblvNWkla%2Bs1yFVLQ1Al5hcdzBahpLN9eMTlStt2tI5M4D2garQoYjsfETUqfyEJf7X9dYUVosWMqxpIQjbcuCzw%2BXazIXg98tuUotInFmL6wwaGKG%2FqhlNu1zpo8Z50XVFI6M3EtZD0WBaxuxc8slose1XY1LzshB4u6MRdNM1dR6CM8Au24hLwfBI3QqdcaFH2w7P64v%2B%2BHD2ci5uEKynjNkU3qLcgJtokbVD4mhc8uk4rfFA5b%2B8T9pX8jfDO9ijNRvD87%2Fjj6tMAMTg1dzVnvY68UNttOMwx%2BqMlQY6qQGjGCPiHs66PLnaBpjkX%2FvOW370xi8lhs5xjyMxKel8%2FwIhgSPY5xe%2B3ZTw%2B3tvgou5q4EBn%2FCe9TuoOhUSAKhskfPRz6KMRmWWudeavtaDOIw0dMquvFlTvDbFkjY1X1fA54T5xB%2FiZKny1pCKu8aTZtq0SRiKiYDEvpJlErNBwmX6irrALUYwCQKNHWmSG2L9DG3GGWpqliFdQkCfmOS3DPyAv2jv9N7H&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220610T131412Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFANBTJK4H%2F20220610%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ffdda6b99ba55ddf44cce4fb9cbd564b0830a967be16a4aef7c9f493e1e64639"
            className="card-img-top user_image"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>

            <div className="card-text detail_user">
              <p>
                <span>0 calori</span>
                <span> | </span>

                <span>0 calori</span>
              </p>
            </div>
          </div>
        </div>
        <div className="card card_user">
          <img
            src="https://edamam-product-images.s3.amazonaws.com/web-img/72e/72ebeef4f13b029165ce5fc4a675130e.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLWVhc3QtMSJHMEUCIAp76RBJb3%2FGqQ2EqxGtCiZLJnM%2FaAElEsMYJzW%2FSpI%2FAiEAivb7i9wjsGCz%2BQfPLaC%2F%2F609Yu43Vrhy87x%2FVa%2BlxFsq0gQILRAAGgwxODcwMTcxNTA5ODYiDICJtuToDe2Zp1PfciqvBAyz3bEw5sg4CFEzO0cdPIQyI2Y6p9giVxLrF5UueLXxFaKCeEbfHwfaQ%2Fzuhl0FdvVg6guH6UCHZra9ncs43mJX4r8fgQURhNLYKh3SoRzupXzqjAsp5ujC5vFzVxP%2BJBKS3zvyhzhgT%2Fvq3ZWZgUl8xfp86Yv07rkf6qrBzVz4JmSmHL9mwZrGSyTd6l6GLAO9ISmmdlRHqZwJs323F9TCr3udsMEPljrEGvw2SqtIpgpJAYmc6%2F8m3eX6SicsjG1bIbVjonu1T74W4eBqEFwxp55VIyZrAqybvHrsfMsJYNIf02IXU4IE87aCGXswgwm5r9D9JoVoT9EY8c1s9qz5a2qydT1YmxddXQqclgtIkAlRwF8WIP4MkzwIoxfU0syFdCc5JikEttEU7bzqUjYdSG67dyc%2FtdXZ2fpHATlVRHvAJE8tYVajCGa5L0fMQ301%2BqXxEEblvNWkla%2Bs1yFVLQ1Al5hcdzBahpLN9eMTlStt2tI5M4D2garQoYjsfETUqfyEJf7X9dYUVosWMqxpIQjbcuCzw%2BXazIXg98tuUotInFmL6wwaGKG%2FqhlNu1zpo8Z50XVFI6M3EtZD0WBaxuxc8slose1XY1LzshB4u6MRdNM1dR6CM8Au24hLwfBI3QqdcaFH2w7P64v%2B%2BHD2ci5uEKynjNkU3qLcgJtokbVD4mhc8uk4rfFA5b%2B8T9pX8jfDO9ijNRvD87%2Fjj6tMAMTg1dzVnvY68UNttOMwx%2BqMlQY6qQGjGCPiHs66PLnaBpjkX%2FvOW370xi8lhs5xjyMxKel8%2FwIhgSPY5xe%2B3ZTw%2B3tvgou5q4EBn%2FCe9TuoOhUSAKhskfPRz6KMRmWWudeavtaDOIw0dMquvFlTvDbFkjY1X1fA54T5xB%2FiZKny1pCKu8aTZtq0SRiKiYDEvpJlErNBwmX6irrALUYwCQKNHWmSG2L9DG3GGWpqliFdQkCfmOS3DPyAv2jv9N7H&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220610T131412Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFANBTJK4H%2F20220610%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ffdda6b99ba55ddf44cce4fb9cbd564b0830a967be16a4aef7c9f493e1e64639"
            className="card-img-top user_image"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>

            <div className="card-text detail_user">
              <p>
                <span>0 calori</span>
                <span> | </span>

                <span>0 calori</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
