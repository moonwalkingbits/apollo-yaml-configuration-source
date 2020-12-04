/*
 * Copyright (c) 2020 Martin Pettersson
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { AbstractFileConfigurationSource, ConfigurationSourceInterface } from "@moonwalkingbits/apollo-configuration";

/**
 * A YAML file configuration source.
 */
declare class YamlConfigurationSource extends AbstractFileConfigurationSource implements ConfigurationSourceInterface {
    /**
     * Provide the configuration source settings.
     *
     * @return Configuration settings.
     */
    public load(): Promise<{[key: string]: any}>;
}

export { YamlConfigurationSource };
