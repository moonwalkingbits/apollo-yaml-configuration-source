/*
 * Copyright (c) 2020 Martin Pettersson
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { expectAssignable, expectType } from "tsd";

import { ConfigurationSourceInterface } from "@moonwalkingbits/apollo-configuration";
import { YamlConfigurationSource } from ".";

const yamlConfigurationSource = new YamlConfigurationSource("config.yml");

expectAssignable<ConfigurationSourceInterface>(yamlConfigurationSource);
expectType<{[key: string]: any}>(await yamlConfigurationSource.load());
