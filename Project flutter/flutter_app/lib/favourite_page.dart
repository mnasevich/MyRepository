import 'package:flutter/material.dart';
import 'Favourites.dart';
import 'package:provider/provider.dart';
import 'favourite_list.dart';

class FavouritePage extends StatelessWidget {

  FavouritePage ({Key key}) : super(key: key);
  @override
  Widget build(BuildContext context) {

    final dogData = Provider.of<FavouritesDataProvider>(context);

    return Scaffold(
      appBar: AppBar(
        title: Text("Избранное"),

      ),
      body: dogData.favouritesItems.isEmpty
        ?Card(
        margin: const EdgeInsets.all(30.0),
        child: Container(
          alignment: Alignment.center,
          height: 200,
          width: 300,
          child: Text("Пусто", style: TextStyle(fontSize:30)),
        )
      )
          :Column(
        children: <Widget>[
          Divider(),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: <Widget>[
              Text("Добавлено " + dogData.favouritesItemsCount.toString()),
              MaterialButton(
                onPressed: (){
                dogData.clear();
              },
                color: Colors.indigo[400],
                child: Text("Очистить"),
              ),
            ],
          ),
          Divider(),
          Expanded(child: FavouriteList(dogData: dogData)),
        ],
      )
    );
  }
}