import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import 'Favourites.dart';

class FavouriteElement extends StatelessWidget {

  final index, dogData;
  const FavouriteElement ({Key key, this.dogData, this.index}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      child: ListTile(
        leading: Container(
          width: 50,
          height: 50,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(15),
            image: DecorationImage(
              image: NetworkImage(dogData.favouritesItems.values.toList()[index].imgUrl),
              fit: BoxFit.cover,
            ),
            ),
          ),
        title:Text(dogData.favouritesItems.values.toList()[index].title),
        trailing: Row(
          mainAxisSize: MainAxisSize.min,//была ошибочка
          children: <Widget>[
            IconButton(
                icon: Icon(Icons.delete),
                onPressed: (){
                  Provider.of<FavouritesDataProvider>(context, listen: false)
                      .deleteFavourite(dogData.favouritesItems.keys.toList()[index]);
                },
                ),
          ]
        ),
        ),
      );

  }
}