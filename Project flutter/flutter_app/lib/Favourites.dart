import 'dart:collection';
import 'package:flutter/foundation.dart';

class Favourites{
  final String id;
  final String title;
  final String imgUrl;

  Favourites({
    @required this.id,
    @required this.title,
    @required this.imgUrl,
  });
}

class FavouritesDataProvider with ChangeNotifier{
  Map<String, Favourites> _favouritesItems ={};
  UnmodifiableMapView<String, Favourites> get favouritesItems
  =>UnmodifiableMapView(_favouritesItems);

  int get favouritesItemsCount => _favouritesItems.length;

  void addFavourites({DogId,title,imgUrl}){
    if(_favouritesItems.containsKey(DogId)) {
      _favouritesItems.update(DogId, (ex) =>
          Favourites(

              id: ex.id,
              title: ex.title,
              imgUrl: ex.imgUrl));
    }else{
      _favouritesItems.putIfAbsent(DogId, () => Favourites(
          id: "${DateTime.now()}",
          title: title,
          imgUrl: imgUrl));
    }
    notifyListeners();
  }
  void deleteFavourites({DogId,title,imgUrl}){
    _favouritesItems.remove(DogId);
    notifyListeners();
  }

  void deleteFavourite(String DogId){
    _favouritesItems.remove(DogId);
    notifyListeners();
  }
  void clear(){
    _favouritesItems = {};
    notifyListeners();
  }

}