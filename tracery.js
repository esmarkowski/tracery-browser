/**
 * @author Kate Compton
 */
import util from './util/util';

import Grammar from './lib/Grammar';
import TraceryNode from './lib/TraceryNode';
import Symbol from './lib/Symbol';
import NodeAction from './lib/NodeAction';
import RuleSet from './lib/RuleSet';
import * as baseEngModifiers from './util/baseEndModifiers';

const tracery = util;

// tracery.NodeAction = require('./lib/NodeAction').default;
// tracery.RuleSet = require('./lib/RuleSet').default;
// tracery.Symbol = require('./lib/Symbol').default;
// tracery.TraceryNode = require('./lib/TraceryNode').default;
// tracery.baseEngModifiers = require('./util/baseEndModifiers');

// export default tracery;
export { Grammar, TraceryNode, Symbol, util, NodeAction, baseEngModifiers, RuleSet};
tracery.Grammar = Grammar;
tracery.NodeAction = NodeAction;
tracery.RuleSet = RuleSet;
tracery.Symbol = Symbol;
tracery.TraceryNode = TraceryNode;
tracery.baseEngModifiers = baseEngModifiers;

export default tracery;
