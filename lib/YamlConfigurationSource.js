/*
 * Copyright (c) 2020 Martin Pettersson
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import yaml from "js-yaml";
import { AbstractFileConfigurationSource } from "@moonwalkingbits/apollo-configuration";

/**
 * A YAML file configuration source.
 *
 * @implements {@moonwalkingbits/apollo-configuration.ConfigurationSourceInterface}
 */
class YamlConfigurationSource extends AbstractFileConfigurationSource {
    /**
     * Provide the configuration source settings.
     *
     * @public
     * @async
     * @return {Promise.<Object.<string, *>>} Configuration settings.
     */
    async load() {
        return yaml.load(await this.readFile());
    }
}

export default YamlConfigurationSource;
