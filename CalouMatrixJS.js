
//Calou Matrix Javascript
//Version : 2.0
//Need Use Variable to Call New Method

/** 
*   Calou_Matrix_Method , Develop By Calou 
*/

class Calou_Matrix_Method{
    constructor() {
        //Matrix Max Size
        this.Matrix_Size = {};

        //Matrix Array
        this.Matrix = [];

        //Method Log
        this.Log = [];
    }


    /** 
    *   Reset_Matrix : Clear And Reset Matrix Array
    */
    Reset_Matrix(){
        this.Matrix = [];
    }


    /** 
    *   Check_This_Matrix : Check Matrix Size is Bigger?
    *   @param Check_Matrix_Row Check_Matrix_Row : Be checked Matrix Row
    *   @param Check_Matrix_Column Check_Matrix_Column : Be checked Matrix Column
    */
    Check_This_Matrix(Check_Matrix_Row,Check_Matrix_Column){
        //if Be checked Matrix is bigger this function Martix,it will return false
        if(Check_Matrix_Row <= this.Matrix_Size.Row && Check_Matrix_Column <= this.Matrix_Size.Column)
            return true;
        else
            return false;
    }

    /** 
    *   Initialization_Matrix_Size : Initialization Matrix Postion Size
    *   @param Setting_Matrix_Size_Row Setting_Matrix_Size_Row : Set Matrix Max Row Size
    *   @param Setting_Matrix_Size_Column Setting_Matrix_Size_Column : Set Matrix Max Column Size
    */
    Initialization_Matrix_Size(Setting_Matrix_Size_Row,Setting_Matrix_Size_Column){

        //Record Log
        this.Log[this.Log.length] = {
            Method_Function:"Initialization_Matrix_Size",
            Introduce_Variable:
                "Setting_Matrix_Size_Row : " + Setting_Matrix_Size_Row + " , " +
                "Setting_Matrix_Size_Column : " + Setting_Matrix_Size_Column,
            Log_Output:undefined,
        }

        //Transfer Variable to Matrix_Size
        this.Matrix_Size.Row = Setting_Matrix_Size_Row;
        this.Matrix_Size.Column = Setting_Matrix_Size_Column;
        this.Log[this.Log.length] = {
            Method_Function:"Initialization_Matrix_Size",
            Introduce_Variable:
                "Matrix_Size.Row : " + this.Matrix_Size.Row + " , " +
                "Matrix_Size.Column : " + this.Matrix_Size.Column + " , " +
                "Setting_Matrix_Size_Row : " + Setting_Matrix_Size_Row + " , " +
                "Setting_Matrix_Size_Column : " + Setting_Matrix_Size_Column,
            Log_Output:"Transfer Setting_Matrix_Size to Matrix_Size",
        }

        //Setting Matrix Array
        for(var Preparing_Size_Row = 0;Preparing_Size_Row < this.Matrix_Size.Row;Preparing_Size_Row++){
            this.Matrix[Preparing_Size_Row] = [];
            this.Log[this.Log.length] = {
                Method_Function:"Initialization_Matrix_Size",
                Introduce_Variable:
                    "Preparing_Size_Row : " + Preparing_Size_Row + " , " +
                    "Matrix[Preparing_Size_Row] : " + this.Matrix[Preparing_Size_Row],
                Log_Output:"Initialization Matrix Array",
            }
        }
        

        for(var Preparing_Size_Row = 0;Preparing_Size_Row < this.Matrix_Size.Row;Preparing_Size_Row++){
            for(var Preparing_Size_Column = 0;Preparing_Size_Column < this.Matrix_Size.Column;Preparing_Size_Column++){
                this.Matrix[Preparing_Size_Row][Preparing_Size_Column] = 0;
                this.Log[this.Log.length] = {
                    Method_Function:"Initialization_Matrix_Size",
                    Introduce_Variable:
                        "this.Matrix[Preparing_Size_Row][Preparing_Size_Column] : " + this.Matrix[Preparing_Size_Row][Preparing_Size_Column],
                    Log_Output:"Set Matrix Array is Zero",
                }
            }
        }
        return {Result:true,Reason:"Success Execution Function"};
    }


    /** 
    *   Install_Matrix_Value : Install Matrix Postion Value
    *   @param Matrix_Postion_Row Matrix_Postion_Row : Set Matrix Max Row
    *   @param Matrix_Postion_Column Matrix_Postion_Column : Set Matrix Max Column
    *   @param Matrix_Value Matrix_Value : Set Matrix Value
    */
    Install_Matrix_Value(Matrix_Postion_Row,Matrix_Postion_Column,Matrix_Value){
        if(this.Check_This_Matrix(Matrix_Postion_Row,Matrix_Postion_Column) == false)
            return {Result:false,Reason:"Matrix Size is Beyond"};

        this.Log[this.Log.length] = {
            Method_Function:"Install_Matrix_Value",
            Introduce_Variable:
                "Matrix_Postion_Row : " + Matrix_Postion_Row + " , " +
                "Matrix_Postion_Column : " + Matrix_Postion_Column + " , " +
                "Matrix_Value : " + Matrix_Value + " , ",
            Log_Output:"Set Matrix Value",
        }

        this.Matrix[Matrix_Postion_Row - 1][Matrix_Postion_Column - 1] = Matrix_Value;
        return {Result:true,Reason:"Success Execution Function"};
    }


    /** 
    *   Transpose_Matrix : Get Transpose Matrix
    */
    Transpose_Matrix(){
        var cache_Matrix = [];
        this.Log[this.Log.length] = {
            Method_Function:"Transpose_Matrix",
            Introduce_Variable:undefined,
            Log_Output:"Set Null Matrix",
        }

        for(var Select_Matrix_Row = 0;Select_Matrix_Row < this.Matrix_Size.Column;Select_Matrix_Row++){
            cache_Matrix[Select_Matrix_Row] = [];
            
        }
        
        for(var Select_Matrix_Row = 0;Select_Matrix_Row < this.Matrix_Size.Row;Select_Matrix_Row++){
            for(var Select_Matrix_Column = 0;Select_Matrix_Column < this.Matrix_Size.Column;Select_Matrix_Column++){
                cache_Matrix[Select_Matrix_Column][Select_Matrix_Row] = this.Matrix[Select_Matrix_Row][Select_Matrix_Column];
                this.Log[this.Log.length] = {
                    Method_Function:"Transpose_Matrix",
                    Introduce_Variable:
                        "cache_Matrix[Select_Matrix_Column][Select_Matrix_Row] : " + cache_Matrix[Select_Matrix_Column][Select_Matrix_Row] + " , " +
                        "this.Matrix[Select_Matrix_Row][Select_Matrix_Column] : " + this.Matrix[Select_Matrix_Row][Select_Matrix_Column],
                    Log_Output:"Transpose Matrix Value",
                }
            }
        }

        //Just Output it
        return cache_Matrix;
    }
}


/** 
*   Matrix_Checker
*   @param A_Martix A_Martix : Martix
*   @param B_Martix B_Martix : Martix
*/
function Martix_Checker(A_Martix,B_Martix){
    if(A_Martix.length == B_Martix.length && A_Martix[A_Martix.length - 1].length == B_Martix[B_Martix.length - 1].length)
        return true;
    else
        return false;
}

/** 
*   Transpose_Matrix
*   @param in_Matrix in_Matrix : Matrix
*/
function Transpose_Matrix(in_Matrix){
    var MatrixT = [];

    for(var Select_Matrix_Row = 0;Select_Matrix_Row < in_Matrix[in_Matrix.length - 1].length;Select_Matrix_Row++){
        MatrixT[Select_Matrix_Row] = [];
    }

    for(var Select_Matrix_Row = 0;Select_Matrix_Row < in_Matrix[in_Matrix.length - 1].length;Select_Matrix_Row++){
        for(var Select_Matrix_Column = 0;Select_Matrix_Column < in_Matrix.length;Select_Matrix_Column++){
            MatrixT[Select_Matrix_Row][Select_Matrix_Column] = in_Matrix[Select_Matrix_Column][Select_Matrix_Row];
        }
    }
    return MatrixT;
}


/** 
*   Matrix_Subtraction 
*   @param Minuend Minuend : Minuend
*   @param Subtraction Subtraction : Subtraction
*/
function Matrix_Subtraction(Minuend,Subtraction){
    if(!Martix_Checker(Minuend,Subtraction))
        return {Result:false,Reason:"Martix Size is not Same"};

    var Remainder = [];

    for(Lookup_Row = 0;Lookup_Row < Minuend.length;Lookup_Row++){
        Remainder[Lookup_Row] = [];
    }

    for(Lookup_Row = 0;Lookup_Row < Minuend.length;Lookup_Row++){
        for(Lookup_Column = 0;Lookup_Column < Minuend[Minuend.length-1].length;Lookup_Column++){
            Remainder[Lookup_Row][Lookup_Column] = Minuend[Lookup_Row][Lookup_Column] - Subtraction[Lookup_Row][Lookup_Column];
        }
    }

    return Remainder;
}


/** 
*   Matrix_Aaddition
*   @param Summand Summand : Summand
*   @param Addend Addend : Addend
*/
function Matrix_Aaddition(Summand,Addend){
    if(!Martix_Checker(Summand,Addend))
        return {Result:false,Reason:"Martix Size is not Same"};

    var Sum = [];

    for(Lookup_Row = 0;Lookup_Row < Summand.length;Lookup_Row++){
        Sum[Lookup_Row] = [];
    }

    for(Lookup_Row = 0;Lookup_Row < Summand.length;Lookup_Row++){
        for(Lookup_Column = 0;Lookup_Column < Summand[Summand.length - 1].length;Lookup_Column++){
            Sum[Lookup_Row][Lookup_Column] = parseFloat(Summand[Lookup_Row][Lookup_Column]) + parseFloat(Addend[Lookup_Row][Lookup_Column]);
        }
    }

    return Sum;
}


/** 
*   Matrix_Multiplication
*   @param in_Multipliered in_Multipliered : multiplier
*   @param in_Multiplier in_Multiplier : Multiplier
*/
function Matrix_Multiplication(in_Multipliered,in_Multiplier){
    if(in_Multipliered.length != in_Multiplier[in_Multiplier.length - 1].length || in_Multipliered[in_Multipliered.length-1].length != in_Multiplier.length)
        return {Result:false,Reason:"Multipliered Martix Row or Column and Multiplier Martix Row or Column is not Same"};

    var Multipliered = Transpose_Matrix(in_Multipliered);
    var Multiplier = Transpose_Matrix(in_Multiplier);
    
    
    var Sum = [];
    for(Lookup_Row = 0;Lookup_Row < Multipliered.length;Lookup_Row++){
        Sum[Lookup_Row] = [];
        for (Lookup_Column=0; Lookup_Column<Multipliered.length; Lookup_Column++){
            Sum[Lookup_Row][Lookup_Column] = 0;
        }
    }

	for (var k=0; k<Multipliered.length; k++){
		for (var i=0; i<Multiplier.length; i++){
			for (var j=0; j<Multiplier[0].length; j++){
                Sum[k][j] += Multipliered[k][i]*Multiplier[i][j];
            }
        }
    }

    return Sum;
}

function multiple_matrix(input_Matrix,multiple){
  var cache_Matrix = [];
  for(Select_Matrix_Row=0;Select_Matrix_Row<input_Matrix.length;Select_Matrix_Row++){
    cache_Matrix[Select_Matrix_Row] = [];
  }
  
  for(Select_Matrix_Row = 0;Select_Matrix_Row<input_Matrix.length;Select_Matrix_Row++){
    for(Select_Matrix_Column = 0;Select_Matrix_Column<input_Matrix[input_Matrix.length-1].length;Select_Matrix_Column++){
      cache_Matrix[Select_Matrix_Row][Select_Matrix_Column] = input_Matrix[Select_Matrix_Row][Select_Matrix_Column] * multiple;
    }
  }
  return cache_Matrix;
}

let row = 'row';
let column = 'column';
function Get_Single_Rank(input_Matrix,RoC,where,returnArray){
  if(returnArray == true){
    var Result = [];
    if(RoC == row){
      for(var Select_Matrix_Row = 0;Select_Matrix_Row<input_Matrix.length;Select_Matrix_Row++){
        Result[Select_Matrix_Row] = [];
      }
    }
    else if(RoC == column){
      Result[0] = [];
    }
  }
  else
    var Result = '';
    
  if(RoC == row){
    for(var Select_Matrix_Row = 0;Select_Matrix_Row<input_Matrix.length;Select_Matrix_Row++){
      if(returnArray == true)
        Result[Select_Matrix_Row][0] = input_Matrix[Select_Matrix_Row][where - 1].toFixed(2);
      else
        Result += input_Matrix[Select_Matrix_Row][where - 1].toFixed(2) + " ";
    }    
  }
  else if(RoC == column){
    for(var Select_Matrix_Column = 0;Select_Matrix_Column<input_Matrix[where - 1].length;Select_Matrix_Column++){
      if(returnArray == true)
        Result[0][Select_Matrix_Column] = input_Matrix[where - 1][Select_Matrix_Column].toFixed(2);
      else
        Result += input_Matrix[where - 1][Select_Matrix_Column].toFixed(2) + "\n";
    }
  }
  return Result;
}