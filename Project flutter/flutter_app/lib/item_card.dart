import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'Dog.dart';
import 'Favourites.dart';
import 'description_page.dart';


class ItemCard extends StatefulWidget {
  ItemCard({Key key}) : super(key: key);
  @override
  _ItemCard createState() => _ItemCard();
}
 class _ItemCard extends State<ItemCard>{
   bool _isFavourite = true;
  Color _iconColor = Colors.white;

  @override
  Widget build(BuildContext context) {

    final dog = Provider.of<Dog>(context,listen: false);
    return Container(
      width: 160,
     padding: const EdgeInsets.all(10.0),
     margin:const EdgeInsets.all(5.0),
     decoration: BoxDecoration(
       borderRadius: BorderRadius.circular(15.0),
       color: Colors.blue[200],
     ),
     child: Column(
       mainAxisAlignment: MainAxisAlignment.spaceBetween,
       crossAxisAlignment: CrossAxisAlignment.stretch,
       children: <Widget>[
         GestureDetector(
           onTap:(){
             Navigator.of(context)
                 .push(MaterialPageRoute(builder: (context) =>
                 DescriptionPage(dogId: dog.id)),
             );
           },
           child: Column(
             mainAxisAlignment: MainAxisAlignment.spaceBetween,
               children: <Widget>[
                 Container(
                   height:160,
                   decoration: BoxDecoration(
                     borderRadius:BorderRadius.circular(15),
                     image:DecorationImage(
                         image: NetworkImage(dog.imgUrl),
                         fit: BoxFit.cover,
                     ),
                   ),
                 ),
                 Container(
                   child: Text(
                       '${dog.title}',
                     style: TextStyle(fontSize:16, fontWeight: FontWeight.bold),
                   ),

                 )
               ]

           ),
         ),
         Container(
           child:Row(
             mainAxisAlignment: MainAxisAlignment.center,
             children: <Widget>[
           IconButton(
           icon: Icon(Icons.favorite,color: _iconColor),
             onPressed: () {
             setState(() {
               if(_isFavourite) {
                 _iconColor = Colors.indigoAccent;
                 _isFavourite = false;
                 Provider.of<FavouritesDataProvider>(context, listen: false)
                     .addFavourites(
                   DogId: dog.id,
                   title: dog.title,
                   imgUrl: dog.imgUrl,
                 );
               }
               else{
                 _isFavourite = true;
                 _iconColor = Colors.white;
                 Provider.of<FavouritesDataProvider>(context, listen: false)
                     .deleteFavourites(
                   DogId: dog.id,
                   title:dog.title,
                   imgUrl: dog.imgUrl,
                 );
               }
             }
             );
             },
           )
             ]
           )
         )
       ],
     ),
    );
  }


}