import 'package:flutter/material.dart';
class CardView extends StatelessWidget {
  CardView({Key? key,required this.index}) : super(key: key);
  final index;
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(4.0),
      child: Card(
        elevation: 40,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(15.0),
          ),
          child: ListTile(
            title: const Text('Student Name',style: TextStyle(fontSize: 18,fontWeight: FontWeight.w400,color: Colors.black),),
            subtitle: const Text('Percentage',style: TextStyle(fontSize: 16,fontWeight: FontWeight.w200,color: Colors.black45),),
            trailing: IconButton(
              icon: const Icon(Icons.edit,size: 36,color: Colors.indigo,),
              onPressed: (){
                print('add ${index}');
              },
            ),
          ),
      ),
    );
  }
}
