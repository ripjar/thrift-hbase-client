//
// Autogenerated by Thrift Compiler (0.20.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;
var Int64 = require('node-int64');


var ttypes = module.exports = {};
var TCell = module.exports.TCell = function(args) {
  this.value = null;
  this.timestamp = null;
  if (args) {
    if (args.value !== undefined && args.value !== null) {
      this.value = args.value;
    }
    if (args.timestamp !== undefined && args.timestamp !== null) {
      this.timestamp = args.timestamp;
    }
  }
};
TCell.prototype = {};
TCell.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.value = input.readBinary();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.timestamp = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TCell.prototype.write = function(output) {
  output.writeStructBegin('TCell');
  if (this.value !== null && this.value !== undefined) {
    output.writeFieldBegin('value', Thrift.Type.STRING, 1);
    output.writeBinary(this.value);
    output.writeFieldEnd();
  }
  if (this.timestamp !== null && this.timestamp !== undefined) {
    output.writeFieldBegin('timestamp', Thrift.Type.I64, 2);
    output.writeI64(this.timestamp);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var ColumnDescriptor = module.exports.ColumnDescriptor = function(args) {
  this.name = null;
  this.maxVersions = 3;
  this.compression = 'NONE';
  this.inMemory = false;
  this.bloomFilterType = 'NONE';
  this.bloomFilterVectorSize = 0;
  this.bloomFilterNbHashes = 0;
  this.blockCacheEnabled = false;
  this.timeToLive = 2147483647;
  if (args) {
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name;
    }
    if (args.maxVersions !== undefined && args.maxVersions !== null) {
      this.maxVersions = args.maxVersions;
    }
    if (args.compression !== undefined && args.compression !== null) {
      this.compression = args.compression;
    }
    if (args.inMemory !== undefined && args.inMemory !== null) {
      this.inMemory = args.inMemory;
    }
    if (args.bloomFilterType !== undefined && args.bloomFilterType !== null) {
      this.bloomFilterType = args.bloomFilterType;
    }
    if (args.bloomFilterVectorSize !== undefined && args.bloomFilterVectorSize !== null) {
      this.bloomFilterVectorSize = args.bloomFilterVectorSize;
    }
    if (args.bloomFilterNbHashes !== undefined && args.bloomFilterNbHashes !== null) {
      this.bloomFilterNbHashes = args.bloomFilterNbHashes;
    }
    if (args.blockCacheEnabled !== undefined && args.blockCacheEnabled !== null) {
      this.blockCacheEnabled = args.blockCacheEnabled;
    }
    if (args.timeToLive !== undefined && args.timeToLive !== null) {
      this.timeToLive = args.timeToLive;
    }
  }
};
ColumnDescriptor.prototype = {};
ColumnDescriptor.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readBinary();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.maxVersions = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.compression = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.BOOL) {
        this.inMemory = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.bloomFilterType = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.I32) {
        this.bloomFilterVectorSize = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.I32) {
        this.bloomFilterNbHashes = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.BOOL) {
        this.blockCacheEnabled = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.I32) {
        this.timeToLive = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ColumnDescriptor.prototype.write = function(output) {
  output.writeStructBegin('ColumnDescriptor');
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 1);
    output.writeBinary(this.name);
    output.writeFieldEnd();
  }
  if (this.maxVersions !== null && this.maxVersions !== undefined) {
    output.writeFieldBegin('maxVersions', Thrift.Type.I32, 2);
    output.writeI32(this.maxVersions);
    output.writeFieldEnd();
  }
  if (this.compression !== null && this.compression !== undefined) {
    output.writeFieldBegin('compression', Thrift.Type.STRING, 3);
    output.writeString(this.compression);
    output.writeFieldEnd();
  }
  if (this.inMemory !== null && this.inMemory !== undefined) {
    output.writeFieldBegin('inMemory', Thrift.Type.BOOL, 4);
    output.writeBool(this.inMemory);
    output.writeFieldEnd();
  }
  if (this.bloomFilterType !== null && this.bloomFilterType !== undefined) {
    output.writeFieldBegin('bloomFilterType', Thrift.Type.STRING, 5);
    output.writeString(this.bloomFilterType);
    output.writeFieldEnd();
  }
  if (this.bloomFilterVectorSize !== null && this.bloomFilterVectorSize !== undefined) {
    output.writeFieldBegin('bloomFilterVectorSize', Thrift.Type.I32, 6);
    output.writeI32(this.bloomFilterVectorSize);
    output.writeFieldEnd();
  }
  if (this.bloomFilterNbHashes !== null && this.bloomFilterNbHashes !== undefined) {
    output.writeFieldBegin('bloomFilterNbHashes', Thrift.Type.I32, 7);
    output.writeI32(this.bloomFilterNbHashes);
    output.writeFieldEnd();
  }
  if (this.blockCacheEnabled !== null && this.blockCacheEnabled !== undefined) {
    output.writeFieldBegin('blockCacheEnabled', Thrift.Type.BOOL, 8);
    output.writeBool(this.blockCacheEnabled);
    output.writeFieldEnd();
  }
  if (this.timeToLive !== null && this.timeToLive !== undefined) {
    output.writeFieldBegin('timeToLive', Thrift.Type.I32, 9);
    output.writeI32(this.timeToLive);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var TRegionInfo = module.exports.TRegionInfo = function(args) {
  this.startKey = null;
  this.endKey = null;
  this.id = null;
  this.name = null;
  this.version = null;
  this.serverName = null;
  this.port = null;
  if (args) {
    if (args.startKey !== undefined && args.startKey !== null) {
      this.startKey = args.startKey;
    }
    if (args.endKey !== undefined && args.endKey !== null) {
      this.endKey = args.endKey;
    }
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    }
    if (args.name !== undefined && args.name !== null) {
      this.name = args.name;
    }
    if (args.version !== undefined && args.version !== null) {
      this.version = args.version;
    }
    if (args.serverName !== undefined && args.serverName !== null) {
      this.serverName = args.serverName;
    }
    if (args.port !== undefined && args.port !== null) {
      this.port = args.port;
    }
  }
};
TRegionInfo.prototype = {};
TRegionInfo.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.startKey = input.readBinary();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.endKey = input.readBinary();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I64) {
        this.id = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.name = input.readBinary();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.BYTE) {
        this.version = input.readByte();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.serverName = input.readBinary();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.I32) {
        this.port = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TRegionInfo.prototype.write = function(output) {
  output.writeStructBegin('TRegionInfo');
  if (this.startKey !== null && this.startKey !== undefined) {
    output.writeFieldBegin('startKey', Thrift.Type.STRING, 1);
    output.writeBinary(this.startKey);
    output.writeFieldEnd();
  }
  if (this.endKey !== null && this.endKey !== undefined) {
    output.writeFieldBegin('endKey', Thrift.Type.STRING, 2);
    output.writeBinary(this.endKey);
    output.writeFieldEnd();
  }
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin('id', Thrift.Type.I64, 3);
    output.writeI64(this.id);
    output.writeFieldEnd();
  }
  if (this.name !== null && this.name !== undefined) {
    output.writeFieldBegin('name', Thrift.Type.STRING, 4);
    output.writeBinary(this.name);
    output.writeFieldEnd();
  }
  if (this.version !== null && this.version !== undefined) {
    output.writeFieldBegin('version', Thrift.Type.BYTE, 5);
    output.writeByte(this.version);
    output.writeFieldEnd();
  }
  if (this.serverName !== null && this.serverName !== undefined) {
    output.writeFieldBegin('serverName', Thrift.Type.STRING, 6);
    output.writeBinary(this.serverName);
    output.writeFieldEnd();
  }
  if (this.port !== null && this.port !== undefined) {
    output.writeFieldBegin('port', Thrift.Type.I32, 7);
    output.writeI32(this.port);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var Mutation = module.exports.Mutation = function(args) {
  this.isDelete = false;
  this.column = null;
  this.value = null;
  this.writeToWAL = true;
  if (args) {
    if (args.isDelete !== undefined && args.isDelete !== null) {
      this.isDelete = args.isDelete;
    }
    if (args.column !== undefined && args.column !== null) {
      this.column = args.column;
    }
    if (args.value !== undefined && args.value !== null) {
      this.value = args.value;
    }
    if (args.writeToWAL !== undefined && args.writeToWAL !== null) {
      this.writeToWAL = args.writeToWAL;
    }
  }
};
Mutation.prototype = {};
Mutation.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.BOOL) {
        this.isDelete = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.column = input.readBinary();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.value = input.readBinary();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.BOOL) {
        this.writeToWAL = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

Mutation.prototype.write = function(output) {
  output.writeStructBegin('Mutation');
  if (this.isDelete !== null && this.isDelete !== undefined) {
    output.writeFieldBegin('isDelete', Thrift.Type.BOOL, 1);
    output.writeBool(this.isDelete);
    output.writeFieldEnd();
  }
  if (this.column !== null && this.column !== undefined) {
    output.writeFieldBegin('column', Thrift.Type.STRING, 2);
    output.writeBinary(this.column);
    output.writeFieldEnd();
  }
  if (this.value !== null && this.value !== undefined) {
    output.writeFieldBegin('value', Thrift.Type.STRING, 3);
    output.writeBinary(this.value);
    output.writeFieldEnd();
  }
  if (this.writeToWAL !== null && this.writeToWAL !== undefined) {
    output.writeFieldBegin('writeToWAL', Thrift.Type.BOOL, 4);
    output.writeBool(this.writeToWAL);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var BatchMutation = module.exports.BatchMutation = function(args) {
  this.row = null;
  this.mutations = null;
  if (args) {
    if (args.row !== undefined && args.row !== null) {
      this.row = args.row;
    }
    if (args.mutations !== undefined && args.mutations !== null) {
      this.mutations = Thrift.copyList(args.mutations, [ttypes.Mutation]);
    }
  }
};
BatchMutation.prototype = {};
BatchMutation.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.row = input.readBinary();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.LIST) {
        this.mutations = [];
        var _rtmp31 = input.readListBegin();
        var _size0 = _rtmp31.size || 0;
        for (var _i2 = 0; _i2 < _size0; ++_i2) {
          var elem3 = null;
          elem3 = new ttypes.Mutation();
          elem3.read(input);
          this.mutations.push(elem3);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

BatchMutation.prototype.write = function(output) {
  output.writeStructBegin('BatchMutation');
  if (this.row !== null && this.row !== undefined) {
    output.writeFieldBegin('row', Thrift.Type.STRING, 1);
    output.writeBinary(this.row);
    output.writeFieldEnd();
  }
  if (this.mutations !== null && this.mutations !== undefined) {
    output.writeFieldBegin('mutations', Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRUCT, this.mutations.length);
    for (var iter4 in this.mutations) {
      if (this.mutations.hasOwnProperty(iter4)) {
        iter4 = this.mutations[iter4];
        iter4.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var TIncrement = module.exports.TIncrement = function(args) {
  this.table = null;
  this.row = null;
  this.column = null;
  this.ammount = null;
  if (args) {
    if (args.table !== undefined && args.table !== null) {
      this.table = args.table;
    }
    if (args.row !== undefined && args.row !== null) {
      this.row = args.row;
    }
    if (args.column !== undefined && args.column !== null) {
      this.column = args.column;
    }
    if (args.ammount !== undefined && args.ammount !== null) {
      this.ammount = args.ammount;
    }
  }
};
TIncrement.prototype = {};
TIncrement.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.table = input.readBinary();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.row = input.readBinary();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.column = input.readBinary();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.I64) {
        this.ammount = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TIncrement.prototype.write = function(output) {
  output.writeStructBegin('TIncrement');
  if (this.table !== null && this.table !== undefined) {
    output.writeFieldBegin('table', Thrift.Type.STRING, 1);
    output.writeBinary(this.table);
    output.writeFieldEnd();
  }
  if (this.row !== null && this.row !== undefined) {
    output.writeFieldBegin('row', Thrift.Type.STRING, 2);
    output.writeBinary(this.row);
    output.writeFieldEnd();
  }
  if (this.column !== null && this.column !== undefined) {
    output.writeFieldBegin('column', Thrift.Type.STRING, 3);
    output.writeBinary(this.column);
    output.writeFieldEnd();
  }
  if (this.ammount !== null && this.ammount !== undefined) {
    output.writeFieldBegin('ammount', Thrift.Type.I64, 4);
    output.writeI64(this.ammount);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var TColumn = module.exports.TColumn = function(args) {
  this.columnName = null;
  this.cell = null;
  if (args) {
    if (args.columnName !== undefined && args.columnName !== null) {
      this.columnName = args.columnName;
    }
    if (args.cell !== undefined && args.cell !== null) {
      this.cell = new ttypes.TCell(args.cell);
    }
  }
};
TColumn.prototype = {};
TColumn.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.columnName = input.readBinary();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRUCT) {
        this.cell = new ttypes.TCell();
        this.cell.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TColumn.prototype.write = function(output) {
  output.writeStructBegin('TColumn');
  if (this.columnName !== null && this.columnName !== undefined) {
    output.writeFieldBegin('columnName', Thrift.Type.STRING, 1);
    output.writeBinary(this.columnName);
    output.writeFieldEnd();
  }
  if (this.cell !== null && this.cell !== undefined) {
    output.writeFieldBegin('cell', Thrift.Type.STRUCT, 2);
    this.cell.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var TRowResult = module.exports.TRowResult = function(args) {
  this.row = null;
  this.columns = null;
  this.sortedColumns = null;
  if (args) {
    if (args.row !== undefined && args.row !== null) {
      this.row = args.row;
    }
    if (args.columns !== undefined && args.columns !== null) {
      this.columns = Thrift.copyMap(args.columns, [ttypes.TCell]);
    }
    if (args.sortedColumns !== undefined && args.sortedColumns !== null) {
      this.sortedColumns = Thrift.copyList(args.sortedColumns, [ttypes.TColumn]);
    }
  }
};
TRowResult.prototype = {};
TRowResult.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.row = input.readBinary();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.MAP) {
        this.columns = {};
        var _rtmp36 = input.readMapBegin();
        var _size5 = _rtmp36.size || 0;
        for (var _i7 = 0; _i7 < _size5; ++_i7) {
          var key8 = null;
          var val9 = null;
          key8 = input.readBinary();
          val9 = new ttypes.TCell();
          val9.read(input);
          this.columns[key8] = val9;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.LIST) {
        this.sortedColumns = [];
        var _rtmp311 = input.readListBegin();
        var _size10 = _rtmp311.size || 0;
        for (var _i12 = 0; _i12 < _size10; ++_i12) {
          var elem13 = null;
          elem13 = new ttypes.TColumn();
          elem13.read(input);
          this.sortedColumns.push(elem13);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TRowResult.prototype.write = function(output) {
  output.writeStructBegin('TRowResult');
  if (this.row !== null && this.row !== undefined) {
    output.writeFieldBegin('row', Thrift.Type.STRING, 1);
    output.writeBinary(this.row);
    output.writeFieldEnd();
  }
  if (this.columns !== null && this.columns !== undefined) {
    output.writeFieldBegin('columns', Thrift.Type.MAP, 2);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRUCT, Thrift.objectLength(this.columns));
    for (var kiter14 in this.columns) {
      if (this.columns.hasOwnProperty(kiter14)) {
        var viter15 = this.columns[kiter14];
        output.writeBinary(kiter14);
        viter15.write(output);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  if (this.sortedColumns !== null && this.sortedColumns !== undefined) {
    output.writeFieldBegin('sortedColumns', Thrift.Type.LIST, 3);
    output.writeListBegin(Thrift.Type.STRUCT, this.sortedColumns.length);
    for (var iter16 in this.sortedColumns) {
      if (this.sortedColumns.hasOwnProperty(iter16)) {
        iter16 = this.sortedColumns[iter16];
        iter16.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var TScan = module.exports.TScan = function(args) {
  this.startRow = null;
  this.stopRow = null;
  this.timestamp = null;
  this.columns = null;
  this.caching = null;
  this.filterString = null;
  this.batchSize = null;
  this.sortColumns = null;
  this.reversed = null;
  this.cacheBlocks = null;
  if (args) {
    if (args.startRow !== undefined && args.startRow !== null) {
      this.startRow = args.startRow;
    }
    if (args.stopRow !== undefined && args.stopRow !== null) {
      this.stopRow = args.stopRow;
    }
    if (args.timestamp !== undefined && args.timestamp !== null) {
      this.timestamp = args.timestamp;
    }
    if (args.columns !== undefined && args.columns !== null) {
      this.columns = Thrift.copyList(args.columns, [null]);
    }
    if (args.caching !== undefined && args.caching !== null) {
      this.caching = args.caching;
    }
    if (args.filterString !== undefined && args.filterString !== null) {
      this.filterString = args.filterString;
    }
    if (args.batchSize !== undefined && args.batchSize !== null) {
      this.batchSize = args.batchSize;
    }
    if (args.sortColumns !== undefined && args.sortColumns !== null) {
      this.sortColumns = args.sortColumns;
    }
    if (args.reversed !== undefined && args.reversed !== null) {
      this.reversed = args.reversed;
    }
    if (args.cacheBlocks !== undefined && args.cacheBlocks !== null) {
      this.cacheBlocks = args.cacheBlocks;
    }
  }
};
TScan.prototype = {};
TScan.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.startRow = input.readBinary();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.stopRow = input.readBinary();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.I64) {
        this.timestamp = input.readI64();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.LIST) {
        this.columns = [];
        var _rtmp318 = input.readListBegin();
        var _size17 = _rtmp318.size || 0;
        for (var _i19 = 0; _i19 < _size17; ++_i19) {
          var elem20 = null;
          elem20 = input.readBinary();
          this.columns.push(elem20);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.I32) {
        this.caching = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.filterString = input.readBinary();
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.I32) {
        this.batchSize = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.BOOL) {
        this.sortColumns = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.BOOL) {
        this.reversed = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.BOOL) {
        this.cacheBlocks = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TScan.prototype.write = function(output) {
  output.writeStructBegin('TScan');
  if (this.startRow !== null && this.startRow !== undefined) {
    output.writeFieldBegin('startRow', Thrift.Type.STRING, 1);
    output.writeBinary(this.startRow);
    output.writeFieldEnd();
  }
  if (this.stopRow !== null && this.stopRow !== undefined) {
    output.writeFieldBegin('stopRow', Thrift.Type.STRING, 2);
    output.writeBinary(this.stopRow);
    output.writeFieldEnd();
  }
  if (this.timestamp !== null && this.timestamp !== undefined) {
    output.writeFieldBegin('timestamp', Thrift.Type.I64, 3);
    output.writeI64(this.timestamp);
    output.writeFieldEnd();
  }
  if (this.columns !== null && this.columns !== undefined) {
    output.writeFieldBegin('columns', Thrift.Type.LIST, 4);
    output.writeListBegin(Thrift.Type.STRING, this.columns.length);
    for (var iter21 in this.columns) {
      if (this.columns.hasOwnProperty(iter21)) {
        iter21 = this.columns[iter21];
        output.writeBinary(iter21);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.caching !== null && this.caching !== undefined) {
    output.writeFieldBegin('caching', Thrift.Type.I32, 5);
    output.writeI32(this.caching);
    output.writeFieldEnd();
  }
  if (this.filterString !== null && this.filterString !== undefined) {
    output.writeFieldBegin('filterString', Thrift.Type.STRING, 6);
    output.writeBinary(this.filterString);
    output.writeFieldEnd();
  }
  if (this.batchSize !== null && this.batchSize !== undefined) {
    output.writeFieldBegin('batchSize', Thrift.Type.I32, 7);
    output.writeI32(this.batchSize);
    output.writeFieldEnd();
  }
  if (this.sortColumns !== null && this.sortColumns !== undefined) {
    output.writeFieldBegin('sortColumns', Thrift.Type.BOOL, 8);
    output.writeBool(this.sortColumns);
    output.writeFieldEnd();
  }
  if (this.reversed !== null && this.reversed !== undefined) {
    output.writeFieldBegin('reversed', Thrift.Type.BOOL, 9);
    output.writeBool(this.reversed);
    output.writeFieldEnd();
  }
  if (this.cacheBlocks !== null && this.cacheBlocks !== undefined) {
    output.writeFieldBegin('cacheBlocks', Thrift.Type.BOOL, 10);
    output.writeBool(this.cacheBlocks);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var TAppend = module.exports.TAppend = function(args) {
  this.table = null;
  this.row = null;
  this.columns = null;
  this.values = null;
  if (args) {
    if (args.table !== undefined && args.table !== null) {
      this.table = args.table;
    }
    if (args.row !== undefined && args.row !== null) {
      this.row = args.row;
    }
    if (args.columns !== undefined && args.columns !== null) {
      this.columns = Thrift.copyList(args.columns, [null]);
    }
    if (args.values !== undefined && args.values !== null) {
      this.values = Thrift.copyList(args.values, [null]);
    }
  }
};
TAppend.prototype = {};
TAppend.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.table = input.readBinary();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.row = input.readBinary();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.LIST) {
        this.columns = [];
        var _rtmp323 = input.readListBegin();
        var _size22 = _rtmp323.size || 0;
        for (var _i24 = 0; _i24 < _size22; ++_i24) {
          var elem25 = null;
          elem25 = input.readBinary();
          this.columns.push(elem25);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.LIST) {
        this.values = [];
        var _rtmp327 = input.readListBegin();
        var _size26 = _rtmp327.size || 0;
        for (var _i28 = 0; _i28 < _size26; ++_i28) {
          var elem29 = null;
          elem29 = input.readBinary();
          this.values.push(elem29);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TAppend.prototype.write = function(output) {
  output.writeStructBegin('TAppend');
  if (this.table !== null && this.table !== undefined) {
    output.writeFieldBegin('table', Thrift.Type.STRING, 1);
    output.writeBinary(this.table);
    output.writeFieldEnd();
  }
  if (this.row !== null && this.row !== undefined) {
    output.writeFieldBegin('row', Thrift.Type.STRING, 2);
    output.writeBinary(this.row);
    output.writeFieldEnd();
  }
  if (this.columns !== null && this.columns !== undefined) {
    output.writeFieldBegin('columns', Thrift.Type.LIST, 3);
    output.writeListBegin(Thrift.Type.STRING, this.columns.length);
    for (var iter30 in this.columns) {
      if (this.columns.hasOwnProperty(iter30)) {
        iter30 = this.columns[iter30];
        output.writeBinary(iter30);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  if (this.values !== null && this.values !== undefined) {
    output.writeFieldBegin('values', Thrift.Type.LIST, 4);
    output.writeListBegin(Thrift.Type.STRING, this.values.length);
    for (var iter31 in this.values) {
      if (this.values.hasOwnProperty(iter31)) {
        iter31 = this.values[iter31];
        output.writeBinary(iter31);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var IOError = module.exports.IOError = function(args) {
  Thrift.TException.call(this, "IOError");
  this.name = "IOError";
  this.message = null;
  if (args) {
    if (args.message !== undefined && args.message !== null) {
      this.message = args.message;
    }
  }
};
Thrift.inherits(IOError, Thrift.TException);
IOError.prototype.name = 'IOError';
IOError.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.message = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

IOError.prototype.write = function(output) {
  output.writeStructBegin('IOError');
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 1);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var IllegalArgument = module.exports.IllegalArgument = function(args) {
  Thrift.TException.call(this, "IllegalArgument");
  this.name = "IllegalArgument";
  this.message = null;
  if (args) {
    if (args.message !== undefined && args.message !== null) {
      this.message = args.message;
    }
  }
};
Thrift.inherits(IllegalArgument, Thrift.TException);
IllegalArgument.prototype.name = 'IllegalArgument';
IllegalArgument.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.message = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

IllegalArgument.prototype.write = function(output) {
  output.writeStructBegin('IllegalArgument');
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 1);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var AlreadyExists = module.exports.AlreadyExists = function(args) {
  Thrift.TException.call(this, "AlreadyExists");
  this.name = "AlreadyExists";
  this.message = null;
  if (args) {
    if (args.message !== undefined && args.message !== null) {
      this.message = args.message;
    }
  }
};
Thrift.inherits(AlreadyExists, Thrift.TException);
AlreadyExists.prototype.name = 'AlreadyExists';
AlreadyExists.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.message = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

AlreadyExists.prototype.write = function(output) {
  output.writeStructBegin('AlreadyExists');
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin('message', Thrift.Type.STRING, 1);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

