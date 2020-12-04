/*
 * Copyright (c) 2020 Martin Pettersson
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { YamlConfigurationSource } from "@moonwalkingbits/apollo-yaml-configuration-source";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const { expect } = require("chai");

describe("YamlConfigurationSource", () => {
    describe("#load", () => {
        it("should return the configuration in the given file", async () => {
            expect(await new YamlConfigurationSource("test/fixtures/config.yml").load()).to.eql({key: "value"});
        });
    });
});
