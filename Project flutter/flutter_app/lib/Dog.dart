import 'dart:collection';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

class Dog with ChangeNotifier{
  final String id;
  final String title;
  final String description;
  final String imgUrl;

  Dog({
    @required this.id,
    @required this.title,
    @required this.description,
    @required this.imgUrl,

});
}

class DogDataProvider with ChangeNotifier {
  List<Dog> _items = [
    Dog(
      id: "1",
      title: "Бассет-хаунд",
      description: "Порода гончих собак, выведенная в Англии."
          " Бассет-хаунды прирождённые охотники, им свойственны такие черты как азартность и подвижность."
          " Они прекрасно могут ужиться в условиях городской квартиры, "
          "но все же жизнь в просторном загородном доме с большим участком,"
          " прилегающим к нему, предпочтительнее.",
      imgUrl: "https://images.dog.ceo/breeds/hound-basset/n02088238_11136.jpg",
    ),
    Dog(
      id: "2",
      title: "Афганская борзая",
      description: "Афганская борзая, также именуемая афган - охотничья порода собак."
          "Афганские борзые любящие и игривые собаки, обожающие общение с человеком."
          " Больше всего они сближаются с одним или двумя людьми из семьи."
          " Эти собаки нуждаются в большом количестве внимания и любви со стороны своих хозяев.",
      imgUrl: "https://images.dog.ceo/breeds/hound-afghan/n02088094_10822.jpg",

    ),
    Dog(
      id: "3",
      title: "Гончая Уолкера",
      description: "Древесная енотовая гончая Уолкера – крепкая и выносливая собака с уравновешенным характером,"
          " которая создавалась для того, чтобы выслеживать и загонять на деревья диких енотов"
          " в их естественной среде обитания. Она высоко ценится за свои непревзойденные охотничьи таланты,"
          " при этом эта порода обычно ведет себя спокойно и сдержанно дома,"
          " что делает из нее замечательного домашнего питомца.",
      imgUrl: "https://images.dog.ceo/breeds/hound-walker/n02089867_1987.jpg",

    ),
    Dog(
      id: "4",
      title: "Бладхаунд",
      description: "Бладхаунд - порода собак, выведенная в Бельгии."
          " Бладхаунды — предельно уравновешенные собаки, они практически никогда не проявляют агрессии."
          " Это верные спутники и надёжные друзья, однако в качестве охранников их практически не используют,"
          " так как они весьма добродушны. Предпочтительнее всего содержать таких собак за городом,"
          " на большом участке, по которому питомец мог бы свободно передвигаться.",
      imgUrl: "https://images.dog.ceo/breeds/hound-blood/n02088466_9697.jpg",
    )
  ];

  UnmodifiableListView <Dog> get items => UnmodifiableListView(_items);
  Dog getElementById( String id)
  => _items.singleWhere((value) => value.id == id);
}