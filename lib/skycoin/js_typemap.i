 %include "typemaps.i"
%include cpointer.i
%pointer_functions(GoSlice, GoSlicePtr);
%pointer_functions(GoUint8_, GoUint8Ptr);
%pointer_functions(_GoString_, GoStringPtr);
%pointer_functions(int, IntPtr);
%pointer_functions(coin__Transaction, coin__TransactionPtr);
%pointer_functions(AddressUxOuts_Handle, AddressUxOuts__HandlePtr);
%pointer_functions(unsigned long long, GoUint64Ptr);
%pointer_functions(long long, GointPtr);
%pointer_functions(unsigned short, GoUint16Ptr);
%pointer_functions(unsigned int, GoUint32Ptr);
%pointer_functions(cipher__Address, cipher__AddressPtr);
%pointer_functions(Transactions__Handle, Transactions__HandlePtr);
%pointer_functions(Transaction__Handle, Transaction__HandlePtr);
%pointer_functions(Block__Handle,Block__HandlePtr);
%pointer_functions(BlockHeader__Handle,BlockHeader__HandlePtr);
%pointer_functions(BlockBody__Handle,BlockBody__HandlePtr);
%pointer_functions(Signature_Handle,Signature_HandlePtr);
%pointer_functions(Number_Handle,Number_HandlePtr);
%pointer_functions(unsigned char, CharPtr);
%pointer_functions(FeeCalculator, FeeCalculatorPtr);
%pointer_functions(FeeCalcFunc, FeeCalcFuncPtr);
%pointer_functions(coin__Block*, coin__BlockPtr);

/*GoString* parameter as reference */
%typemap(in, numinputs=0) _GoString_ (GoString temp) {
	temp.p = NULL;
	temp.n = 0;
	$1 = ($1_type)temp;
}

%extend GoSlice {
	int isEqual(GoSlice *slice){
		return (($self->len == slice->len)) && (memcmp($self->data,slice->data, sizeof(GoSlice_))==0 );
	}

	void convertString(_GoString_ data){
		$self->data = data.p;
		$self->len = strlen(data.p);
		$self->cap = $self->len;
	}

	void setAtChar(char p,long long i){
		((char *) $self->data)[i] = p;
	}

void getString(_GoString_ *out){
	out->p = (char *)$self->data;
	out->n = strlen((char *)$self->data);
}

int getAtString(int index, _GoString_ *outs )
{
	int i;
	_GoString_ *iStr;
	char *out;
	for (i = 0, iStr = (_GoString_ *)$self->data; i < $self->len; ++i, ++iStr)
	{
		if (index == i)
		{
			out = _GoString__getString(iStr);
			_GoString__SetString(outs,out);
			return 0;
		}
	}
	return 1;
}

}

%extend _GoString_ {

	int SetString(char * str){
		$self->p = str;
		$self->n = strlen(str);
	}
	char * getString(){
		return (const char *)$self->p;
	}
		int isEqual( _GoString_ *string2)
{
  return ($self->n == string2->n) &&
         (strcmp((char *)$self->p, (char *)string2->p) == 0);
}
}
