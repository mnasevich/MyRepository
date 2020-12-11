import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'Favourites.dart';
import 'favourite_element.dart';

class FavouriteList extends StatelessWidget {

  final dogData;
  FavouriteList ({Key key, this.dogData}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      child: ListView.builder(
       itemCount: dogData.favouritesItemsCount,
        itemBuilder: (context, index){
         return Dismissible(
             key: ValueKey(dogData.favouritesItems.keys.toList()[index]),
             background: Container(
               child: Icon(
                 Icons.delete,
                color: Colors.amber,
                 size: 30.0,
               ),
               alignment:Alignment.centerRight ,
               margin: const EdgeInsets.symmetric(horizontal: 15.0, vertical: 4),
               padding: const EdgeInsets.only(right: 10.0),
             ),
             onDismissed: (direction)=>Provider.of<FavouritesDataProvider>(context, listen: false)
                 .deleteFavourite(dogData.favouritesItems.keys.toList()[index]),
             child: FavouriteElement(
                 dogData: dogData,
                 index: index,
             ),
         );
        }
      ),
    );

  }
}